import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'
import { CharacterBase } from './character-base'

@ObjectType()
@Entity()
export class PcEntity extends CharacterBase {
  @Field(_type => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  playerName?: string
}
