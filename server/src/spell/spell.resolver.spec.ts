import { SpellResolver } from './spell.resolver'
import { SpellModule } from './spell.module'
import { Test, TestingModule } from '@nestjs/testing'
import { DatabaseModule } from '../database/database.module'
import { SpellSeed } from '../../test/seed/spell.seed'
import { AddSpellInput } from './spell.input'

describe('SpellResolver', () => {
  let resolver: SpellResolver
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [SpellModule, DatabaseModule],
    }).compile()

    resolver = module.get<SpellResolver>(SpellResolver)
  })

  afterAll(async () => module.close())

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should return all spells', async () => {
    const seeds = SpellSeed
    const spells = await resolver.spells()
    expect(spells.length).toEqual(seeds.length)
    expect(spells).toEqual(expect.arrayContaining([expect.objectContaining(seeds[0])]))
  })

  it('should find a spell by ID', async () => {
    const acidSplash = SpellSeed[0]
    const spell = await resolver.spellById(acidSplash.id)
    expect(spell).toEqual(expect.objectContaining(acidSplash))
  })

  it('should find all spells by level', async () => {
    const acidSplash = SpellSeed[0]
    const spells = await resolver.spellsByLevel(acidSplash.level)
    expect(spells).toEqual(expect.arrayContaining([expect.objectContaining(acidSplash)]))
  })

  it('should find all spells by class', async () => {
    const acidSplash = SpellSeed[0]
    const spells = await resolver.spellsByClass('Wizard')
    expect(spells).toEqual(expect.arrayContaining([expect.objectContaining(acidSplash)]))
  })

  it('should add spell', async () => {
    const baneSpell: AddSpellInput = {
      level: 1,
      name: 'Bane',
      school: 'EN',
      castingTime: '1 action',
      duration: 'Concentration, up to 1 minute',
      range: '30 feet',
      components: 'V, S, M (a drop of blood)',
      description:
        'Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.',
      source: 'PHB',
      classes: 'Bard, Cleric, Paladin (Vengeance)',
    }
    const newSpell = await resolver.addSpell(baneSpell)
    expect(newSpell).toEqual(expect.objectContaining(baneSpell))
  })

  it('should edit spell', async () => {
    const barkskinSpell: AddSpellInput = {
      level: 2,
      name: 'Barkskin',
      school: 'T',
      castingTime: '1 action',
      duration: 'Concentration, up to 1 minute',
      range: 'Touch',
      components: 'V, S, M (a handful of oak bark)',
      description: 'No description',
      source: 'PHB',
      classes: 'Cleric (Nature), Druid, Druid (Forest), Ranger',
    }
    const { id } = await resolver.addSpell(barkskinSpell)
    const newDescription =
      "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
    const editedSpell = await resolver.editSpell({
      id,
      description: newDescription,
    })
    expect(editedSpell.description).toEqual(newDescription)
  })

  it('should delete spell', async () => {
    const { id } = SpellSeed[0]
    const deletedSpell = await resolver.deleteSpell(id)
    const spells = await resolver.spells()
    expect(spells).not.toEqual(expect.arrayContaining([expect.objectContaining(deletedSpell)]))
  })
})
