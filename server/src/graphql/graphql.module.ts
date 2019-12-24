import { Module } from '@nestjs/common'
import { GraphqlService } from './graphql.service'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [GraphQLModule.forRootAsync({ useClass: GraphqlService })],
})
export class GraphqlModule {}
