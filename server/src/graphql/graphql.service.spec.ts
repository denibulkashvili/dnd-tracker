import { Test, TestingModule } from '@nestjs/testing'
import { GraphqlService } from './graphql.service'

describe('GraphqlService', () => {
  let service: GraphqlService
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [GraphqlService],
    }).compile()

    service = module.get<GraphqlService>(GraphqlService)
  })

  afterAll(async () => module.close())

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
