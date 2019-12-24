import { Injectable } from '@nestjs/common'
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'
import env from '../config/env'

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  constructor() {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      autoSchemaFile: 'src/graphql/schema.gql',
      playground: !env.production,
    }
  }
}
