import { Test, TestingModule } from '@nestjs/testing'
import { CharacterResolver } from './character.resolver'
import { CharacterModule } from './character.module'
import { DatabaseModule } from '../database/database.module'
import { PcSeed } from '../../test/seed/pc.seed'
import { AddPcInput, EditPcInput } from './character.input'

describe('CharacterResolver', () => {
  let resolver: CharacterResolver
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [CharacterModule, DatabaseModule],
    }).compile()

    resolver = module.get<CharacterResolver>(CharacterResolver)
  })

  afterAll(async () => module.close())

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should return all PCs', async () => {
    const jingLong = PcSeed[0]
    const playerCharacters = await resolver.playerCharacters()
    expect(playerCharacters).toEqual(expect.arrayContaining([expect.objectContaining(jingLong)]))
  })

  it('should return single PC by ID', async () => {
    const jingLong = PcSeed[0]
    const pc = await resolver.playerCharacterById(jingLong.id)
    expect(pc).toEqual(expect.objectContaining(jingLong))
  })

  it('should add a new PC', async () => {
    const input: AddPcInput = {
      name: 'Fallen Tree',
      challenge: '1',
      HP: 12,
      AC: 12,
      STR: 12,
      DEX: 16,
      CON: 14,
      INT: 14,
      WIS: 16,
      CHA: 12,
      speed: '25 ft',
      languages: 'Goblin, Common',
      traits: {
        traitName: '',
        traitDescription: '',
      },
      actions: {
        actionName: 'Nimble Escape',
        actionDescription:
          'Take the Disengage or Hide action as a bonus action on each of its turns.',
      },
      description: '',
    }
    const newPC = await resolver.addPC(input)
    expect(newPC).toEqual(expect.objectContaining(input))
  })

  it('should update the PC', async () => {
    const input: EditPcInput = { id: PcSeed[0].id, HP: 20, languages: '' }
    await resolver.editPC(input)
    const jingLong = await resolver.playerCharacterById(input.id)
    expect(jingLong.HP).toEqual(input.HP)
  })

  it('should update PC', async () => {
    const { id } = PcSeed[0]
    const pc = await resolver.deletePC(id)
    const playerCharacters = await resolver.playerCharacters()
    expect(playerCharacters).not.toEqual(expect.arrayContaining([expect.objectContaining(pc)]))
  })
})
