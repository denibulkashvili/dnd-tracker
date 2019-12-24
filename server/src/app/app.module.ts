import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { GraphqlModule } from '../graphql/graphql.module'
import { CharacterModule } from '../character/character.module'

@Module({
  imports: [DatabaseModule, GraphqlModule, CharacterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
