import { Test, TestingModule } from '@nestjs/testing'
import { CharacterResolver } from './character.resolver'
import { CharacterModule } from './character.module'
import { DatabaseModule } from '../database/database.module'
import { PcSeed } from '../../test/seed/pc.seed'
import {
  AddPcInput,
  EditPcInput,
  AddNpcInput,
  EditNpcInput,
  AddMonsterInput,
  EditMonsterInput,
} from './character.input'
import { NpcSeed } from '../../test/seed/npc.seed'
import { MonsterSeed } from '../../test/seed/monster.seed'

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

  // Testing PC CRUD

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

  it('should delete PC', async () => {
    const { id } = PcSeed[0]
    const pc = await resolver.deletePC(id)
    const playerCharacters = await resolver.playerCharacters()
    expect(playerCharacters).not.toEqual(expect.arrayContaining([expect.objectContaining(pc)]))
  })

  // Testing NPC CRUD

  it('should return all Npcs', async () => {
    const gundren = NpcSeed[0]
    const nonPlayerCharacters = await resolver.nonPlayerCharacters()
    expect(nonPlayerCharacters).toEqual(expect.arrayContaining([expect.objectContaining(gundren)]))
  })

  it('should return single NPC by ID', async () => {
    const gundren = NpcSeed[0]
    const npc = await resolver.nonPlayerCharacterById(gundren.id)
    expect(npc).toEqual(expect.objectContaining(gundren))
  })

  it('should add a new NPC', async () => {
    const input: AddNpcInput = {
      name: 'Saldar Hillwinter',
      challenge: '3',
      HP: 20,
      AC: 16,
      STR: 16,
      DEX: 14,
      CON: 15,
      INT: 14,
      WIS: 11,
      CHA: 13,
      speed: '30 ft',
      languages: 'Common',
      traits: {
        traitName: '',
        traitDescription: '',
      },
      actions: {
        actionName: '',
        actionDescription: '',
      },
      description: 'Paladin and a member of the Harpers',
    }
    const newNPC = await resolver.addNPC(input)
    expect(newNPC).toEqual(expect.objectContaining(input))
  })

  it('should update the NPC', async () => {
    const input: EditNpcInput = { id: NpcSeed[0].id, HP: 20, languages: '' }
    await resolver.editNPC(input)
    const gundren = await resolver.nonPlayerCharacterById(input.id)
    expect(gundren.HP).toEqual(input.HP)
  })

  it('should delete NPC', async () => {
    const { id } = NpcSeed[0]
    const npc = await resolver.deleteNPC(id)
    const nonPlayerCharacters = await resolver.nonPlayerCharacters()
    expect(nonPlayerCharacters).not.toEqual(expect.arrayContaining([expect.objectContaining(npc)]))
  })

  // Testing Monster CRUD

  it('should return all monsters', async () => {
    const goblin = MonsterSeed[0]
    const monsters = await resolver.monsters()
    expect(monsters).toEqual(expect.arrayContaining([expect.objectContaining(goblin)]))
  })

  it('should return single monster by ID', async () => {
    const goblin = MonsterSeed[0]
    const monster = await resolver.monsterById(goblin.id)
    expect(monster).toEqual(expect.objectContaining(goblin))
  })

  it('should add a new monster', async () => {
    const input: AddMonsterInput = {
      name: 'Dryad',
      challenge: '2',
      HP: 30,
      AC: 14,
      STR: 12,
      DEX: 14,
      CON: 15,
      INT: 15,
      WIS: 14,
      CHA: 14,
      speed: '30 ft',
      languages: 'Sylvan',
      traits: {
        traitName: '',
        traitDescription: '',
      },
      actions: {
        actionName: '',
        actionDescription: '',
      },
      description: '',
    }
    const newMonster = await resolver.addMonster(input)
    expect(newMonster).toEqual(expect.objectContaining(input))
  })

  it('should update monster', async () => {
    const input: EditMonsterInput = { id: MonsterSeed[0].id, HP: 33, languages: 'Goblin' }
    await resolver.editMonster(input)
    const goblin = await resolver.monsterById(input.id)
    expect(goblin.HP).toEqual(input.HP)
  })

  it('should delete monster', async () => {
    const { id } = MonsterSeed[0]
    const monster = await resolver.deleteMonster(id)
    const monsters = await resolver.monsters()
    expect(monsters).not.toEqual(expect.arrayContaining([expect.objectContaining(monster)]))
  })
})
