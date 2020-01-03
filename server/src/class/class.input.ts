import { InputType, Field, Int } from 'type-graphql'

@InputType()
export class AddClassInput {
  @Field()
  name: string

  @Field()
  hitDie: string

  @Field()
  spellAbility: string

  @Field()
  source: string

  @Field()
  features: String
}

@InputType()
export class EditClassInput {
  @Field(_type => Int!)
  id: number

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  hitDie?: string

  @Field({ nullable: true })
  spellAbility?: string

  @Field({ nullable: true })
  source?: string

  @Field({ nullable: true })
  features?: String
}
