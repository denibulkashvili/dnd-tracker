import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { GraphqlModule } from '../graphql/graphql.module'
import { CharacterModule } from '../character/character.module'
import { SpellModule } from '../spell/spell.module'
import { ClassModule } from '../class/class.module'

@Module({
  imports: [DatabaseModule, GraphqlModule, CharacterModule, SpellModule, ClassModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
