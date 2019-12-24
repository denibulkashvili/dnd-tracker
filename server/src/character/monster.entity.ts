import { Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'
import { CharacterBase } from './character-base'

@ObjectType()
@Entity()
export class MonsterEntity extends CharacterBase {
  @Field(_type => Int)
  @PrimaryGeneratedColumn()
  id: number
}
