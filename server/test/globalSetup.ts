import { createConnection, Connection } from 'typeorm'
import dbConfig from '../src/database/config'
import { PcSeed } from './seed/pc.seed'
import { PcEntity } from '../src/character/pc.entity'
import { NpcEntity } from '../src/character/npc.entity'
import { NpcSeed } from './seed/npc.seed'
import { MonsterEntity } from '../src/character/monster.entity'
import { MonsterSeed } from './seed/monster.seed'

const playerCharacters = PcSeed
const nonPlayerCharacters = NpcSeed
const monsters = MonsterSeed

async function migrateDB(connection: Connection) {
  console.log('\nMigrating ...')
  await connection.runMigrations()
}

async function seedDB(connection: Connection) {
  console.info('Seeding PCs ...')
  await connection
    .createQueryBuilder()
    .insert()
    .into(PcEntity)
    .values(playerCharacters)
    .execute()

  console.info('Seeding NPCs ...')
  await connection
    .createQueryBuilder()
    .insert()
    .into(NpcEntity)
    .values(nonPlayerCharacters)
    .execute()

  console.info('Seeding Monsters ...')
  await connection
    .createQueryBuilder()
    .insert()
    .into(MonsterEntity)
    .values(monsters)
    .execute()
}

async function setup() {
  let connection: Connection | null = null
  try {
    connection = await createConnection(dbConfig)

    await migrateDB(connection)
    await seedDB(connection)
  } catch (error) {
    console.log('\nSomething went wrong while establishing database connection.')
    throw new Error(error)
  }
  if (connection) {
    await connection.close()
  }
}

export default setup
