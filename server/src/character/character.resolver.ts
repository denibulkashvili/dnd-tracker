import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PcEntity } from './pc.entity'
import { CharacterService } from './character.service'
import { AddPcInput, EditPcInput } from './character.input'

@Resolver('Character')
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  // PC CRUD
  @Query(_returns => [PcEntity])
  async playerCharacters(): Promise<PcEntity[]> {
    return this.characterService.playerCharacters()
  }

  @Query(_returns => [PcEntity])
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

  // Monster CRUD
}
