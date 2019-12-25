import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PcEntity } from './pc.entity'
import { CharacterService } from './character.service'
import {
  AddPcInput,
  EditPcInput,
  AddNpcInput,
  EditNpcInput,
  AddMonsterInput,
  EditMonsterInput,
} from './character.input'
import { NpcEntity } from './npc.entity'
import { MonsterEntity } from './monster.entity'

@Resolver('Character')
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  // PC CRUD

  @Query(_returns => [PcEntity])
  async playerCharacters(): Promise<PcEntity[]> {
    return this.characterService.playerCharacters()
  }

  @Query(_returns => PcEntity)
  async playerCharacterById(@Args('id') id: number): Promise<PcEntity> {
    return this.characterService.playerCharacterById(id)
  }

  @Mutation(_returns => PcEntity)
  async addPC(@Args('input') input: AddPcInput): Promise<PcEntity> {
    return this.characterService.addPC(input)
  }

  @Mutation(_returns => PcEntity)
  async editPC(@Args('input') input: EditPcInput): Promise<PcEntity> {
    return this.characterService.editPC(input)
  }

  @Mutation(_returns => PcEntity)
  async deletePC(@Args('id') id: number): Promise<PcEntity> {
    return this.characterService.deletePC(id)
  }

  // NPC CRUD

  @Query(_returns => [NpcEntity])
  async nonPlayerCharacters(): Promise<NpcEntity[]> {
    return this.characterService.nonPlayerCharacters()
  }

  @Query(_returns => NpcEntity)
  async nonPlayerCharacterById(@Args('id') id: number): Promise<NpcEntity> {
    return this.characterService.nonPlayerCharacterById(id)
  }

  @Mutation(_returns => NpcEntity)
  async addNPC(@Args('input') input: AddNpcInput): Promise<NpcEntity> {
    return this.characterService.addNPC(input)
  }

  @Mutation(_returns => NpcEntity)
  async editNPC(@Args('input') input: EditNpcInput): Promise<NpcEntity> {
    return this.characterService.editNPC(input)
  }

  @Mutation(_returns => NpcEntity)
  async deleteNPC(@Args('id') id: number): Promise<NpcEntity> {
    return this.characterService.deleteNPC(id)
  }

  // Monster CRUD

  @Query(_returns => [MonsterEntity])
  async monsters(): Promise<MonsterEntity[]> {
    return this.characterService.monsters()
  }

  @Query(_returns => MonsterEntity)
  async monsterById(@Args('id') id: number): Promise<MonsterEntity> {
    return this.characterService.monsterById(id)
  }

  @Mutation(_returns => MonsterEntity)
  async addMonster(@Args('input') input: AddMonsterInput): Promise<MonsterEntity> {
    return this.characterService.addMonster(input)
  }

  @Mutation(_returns => MonsterEntity)
  async editMonster(@Args('input') input: EditMonsterInput): Promise<MonsterEntity> {
    return this.characterService.editMonster(input)
  }

  @Mutation(_returns => MonsterEntity)
  async deleteMonster(@Args('id') id: number): Promise<MonsterEntity> {
    return this.characterService.deleteMonster(id)
  }
}
