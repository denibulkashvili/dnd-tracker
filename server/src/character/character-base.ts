import { Column } from 'typeorm'
import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export class Trait {
  @Field({ nullable: true })
  @Column({ nullable: true })
  traitName?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  traitDescription?: string
}

@ObjectType()
export class Action {
  @Field({ nullable: true })
  @Column({ nullable: true })
  actionName?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  actionDescription?: string
}

@ObjectType()
export class CharacterBase {
  @Field()
  @Column()
  name: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  imgUrl?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  type?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  source?: string

  @Field()
  @Column({ default: '0' })
  challenge: string

  @Field(_type => Int!)
  @Column({ default: 0 })
  HP: number

  @Field({ nullable: true })
  @Column({ default: '1d1+0' })
  hitDie?: string

  @Field(_type => Int!)
  @Column({ default: 10 })
  AC: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  acType?: string

  @Field(_type => Int)
  @Column({ default: 0 })
  initiativeModifier?: number

  @Field(_type => Int!)
  @Column({ default: 10 })
  STR: number

  @Field(_type => Int!)
  @Column({ default: 10 })
  DEX: number

  @Field(_type => Int!)
  @Column({ default: 10 })
  CON: number

  @Field(_type => Int!)
  @Column({ default: 10 })
  INT: number

  @Field(_type => Int!)
  @Column({ default: 10 })
  WIS: number

  @Field(_type => Int!)
  @Column({ default: 10 })
  CHA: number

  @Field()
  @Column({ default: '30 ft' })
  speed?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  senses?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  damageVulnerabilities?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  damageResistances?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  damageImmunities?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  conditionImmunities?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  languages?: string

  @Field(_type => Trait, { nullable: true })
  @Column(_type => Trait)
  traits?: Trait

  @Field(_type => Action, { nullable: true })
  @Column(_type => Action)
  actions?: Action

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string
}
