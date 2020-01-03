import { InputType, Field, Int } from 'type-graphql'

@InputType()
export class AddSpellInput {
  @Field(_type => Int!)
  level: number

  @Field()
  name: string

  @Field()
  school: string

  @Field()
  castingTime: string

  @Field()
  duration: string

  @Field()
  range: string

  @Field()
  components: string

  @Field()
  description: string

  @Field()
  source: string

  @Field()
  classes: string
}

@InputType()
export class EditSpellInput {
  @Field(_type => Int!)
  id: number

  @Field(_type => Int!, { nullable: true })
  level?: number

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  school?: string

  @Field({ nullable: true })
  castingTime?: string

  @Field({ nullable: true })
  duration?: string

  @Field({ nullable: true })
  range?: string

  @Field({ nullable: true })
  components?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  source?: string

  @Field({ nullable: true })
  classes?: string
}
