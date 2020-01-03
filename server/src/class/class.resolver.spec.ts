import { ClassResolver } from './class.resolver'
import { TestingModule, Test } from '@nestjs/testing'
import { ClassModule } from './class.module'
import { DatabaseModule } from '../database/database.module'
import { ClassSeed } from '../../test/seed/class.seed'
import { AddClassInput, EditClassInput } from './class.input'

describe('ClassResolver', () => {
  let resolver: ClassResolver
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [ClassModule, DatabaseModule],
    }).compile()

    resolver = module.get<ClassResolver>(ClassResolver)
  })

  afterAll(async () => module.close())

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should return all classes', async () => {
    const seeds = ClassSeed
    const classes = await resolver.classess()
    expect(classes.length).toEqual(seeds.length)
    expect(classes).toEqual(expect.arrayContaining([expect.objectContaining(seeds[0])]))
  })

  it('should return a class by ID', async () => {
    const barbarian = ClassSeed[0]
    const foundClass = await resolver.classById(barbarian.id)
    expect(foundClass).toEqual(expect.objectContaining(barbarian))
  })

  it('should add new class', async () => {
    const wizard: AddClassInput = {
      name: 'Wizard',
      hitDie: 'd6',
      source: 'PHB',
      features: '',
      spellAbility: 'Int',
    }
    const newClass = await resolver.addClass(wizard)
    expect(newClass).toEqual(expect.objectContaining(wizard))
  })

  it('should edit a class', async () => {
    const { id } = await resolver.classById(ClassSeed[0].id)
    const input: EditClassInput = {
      id,
      spellAbility: 'None',
    }
    const edited = await resolver.editClass(input)
    expect(edited.spellAbility).toEqual(input.spellAbility)
  })

  it('should delete a class', async () => {
    const { id } = ClassSeed[0]
    const deletedClass = await resolver.deleteClass(id)
    const classes = await resolver.classess()
    expect(classes).not.toEqual(expect.arrayContaining([expect.objectContaining(deletedClass)]))
  })
})
