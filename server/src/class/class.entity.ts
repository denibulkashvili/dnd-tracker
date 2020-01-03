import { ObjectType, Field, Int } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@ObjectType()
@Entity()
export class ClassEntity {
  @Field(_type => Int!)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  hitDie: string

  @Field()
  @Column()
  spellAbility: string

  @Field()
  @Column()
  source: string

  @Field()
  @Column()
  features: String
}
