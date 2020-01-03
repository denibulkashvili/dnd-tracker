import { Module } from '@nestjs/common'
import { CharacterService } from './character.service'
import { CharacterResolver } from './character.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PcEntity } from './pc.entity'
import { NpcEntity } from './npc.entity'
import { MonsterEntity } from './monster.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PcEntity, NpcEntity, MonsterEntity])],
  providers: [CharacterService, CharacterResolver],
})
export class CharacterModule {}
