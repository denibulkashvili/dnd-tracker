import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
@Entity()
export class SpellEntity {
  @Field(_type => Int!)
  @PrimaryGeneratedColumn()
  id: number

  @Field(_type => Int!)
  @Column()
  level: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  school: string

  @Field()
  @Column()
  castingTime: string

  @Field()
  @Column()
  duration: string

  @Field()
  @Column()
  range: string

  @Field()
  @Column()
  components: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column()
  source: string

  @Field()
  @Column()
  classes: string
}
