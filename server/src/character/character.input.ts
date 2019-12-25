import { InputType, Field, Int } from 'type-graphql'
import { CharacterBase, Action, Trait } from './character-base'

@InputType()
export class TraitInput extends Trait {
  @Field({ nullable: true })
  traitName?: string

  @Field({ nullable: true })
  traitDescription?: string
}

@InputType()
export class ActionInput extends Action {
  @Field({ nullable: true })
  actionName?: string

  @Field({ nullable: true })
  actionDescription?: string
}

@InputType()
export class CharacterBaseInput extends CharacterBase {
  @Field()
  name: string

  @Field({ nullable: true })
  imgUrl?: string

  @Field({ nullable: true })
  type?: string

  @Field({ nullable: true })
  source?: string

  @Field()
  challenge: string

  @Field(_type => Int!)
  HP: number

  @Field({ nullable: true })
  hitDie?: string

  @Field(_type => Int!)
  AC: number

  @Field({ nullable: true })
  acType?: string

  @Field(_type => Int!)
  initiativeModifier?: number

  @Field(_type => Int!)
  STR: number

  @Field(_type => Int!)
  DEX: number

  @Field(_type => Int!)
  CON: number

  @Field(_type => Int!)
  INT: number

  @Field(_type => Int!)
  WIS: number

  @Field(_type => Int!)
  CHA: number

  @Field({ nullable: true })
  speed?: string

  @Field({ nullable: true })
  senses?: string

  @Field({ nullable: true })
  damageVulnerabilities?: string

  @Field({ nullable: true })
  damageResistances?: string

  @Field({ nullable: true })
  damageImmunities?: string

  @Field({ nullable: true })
  conditionImmunities?: string

  @Field({ nullable: true })
  languages?: string

  @Field(_type => TraitInput, { nullable: true })
  traits?: TraitInput

  @Field(_type => ActionInput, { nullable: true })
  actions?: ActionInput

  @Field({ nullable: true })
  description?: string
}

// Add Entities
@InputType()
export class AddPcInput extends CharacterBaseInput {
  @Field({ nullable: true })
  playerName?: string
}

@InputType()
export class AddNpcInput extends CharacterBaseInput {}

@InputType()
export class AddMonsterInput extends CharacterBaseInput {}

// Edit Entities
@InputType()
export class EditCharacterBaseInput {
  @Field(_type => Int!, { nullable: true })
  id: number

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  challenge?: string

  @Field(_type => Int!, { nullable: true })
  HP?: number

  @Field(_type => Int!, { nullable: true })
  AC?: number

  @Field(_type => Int!, { nullable: true })
  STR?: number

  @Field(_type => Int!, { nullable: true })
  DEX?: number

  @Field(_type => Int!, { nullable: true })
  CON?: number

  @Field(_type => Int!, { nullable: true })
  INT?: number

  @Field(_type => Int!, { nullable: true })
  WIS?: number

  @Field(_type => Int!, { nullable: true })
  CHA?: number

  @Field({ nullable: true })
  imgUrl?: string

  @Field({ nullable: true })
  type?: string

  @Field({ nullable: true })
  source?: string

  @Field({ nullable: true })
  hitDie?: string

  @Field({ nullable: true })
  acType?: string

  @Field(_type => Int!, { nullable: true })
  initiativeModifier?: number

  @Field({ nullable: true })
  speed?: string

  @Field({ nullable: true })
  senses?: string

  @Field({ nullable: true })
  damageVulnerabilities?: string

  @Field({ nullable: true })
  damageResistances?: string

  @Field({ nullable: true })
  damageImmunities?: string

  @Field({ nullable: true })
  conditionImmunities?: string

  @Field({ nullable: true })
  languages?: string

  @Field(_type => TraitInput, { nullable: true })
  traits?: TraitInput

  @Field(_type => ActionInput, { nullable: true })
  actions?: ActionInput

  @Field({ nullable: true })
  description?: string
}

@InputType()
export class EditPcInput extends EditCharacterBaseInput {
  @Field({ nullable: true })
  playerName?: string
}

@InputType()
export class EditNpcInput extends EditCharacterBaseInput {}

@InputType()
export class EditMonsterInput extends EditCharacterBaseInput {}
