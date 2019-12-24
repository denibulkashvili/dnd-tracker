import { createConnection, Connection } from 'typeorm'
import dbConfig from '../src/database/config'
import { PcSeed } from './seed/pc.seed'
import { PcEntity } from '../src/character/pc.entity'

const playerCharacters = PcSeed

async function migrateDB(connection: Connection) {
  console.log('\nMigrating ...')
  await connection.runMigrations()
}

async function seedDB(connection: Connection) {
  console.log('Seeding PCs ...')
  await connection
    .createQueryBuilder()
    .insert()
    .into(PcEntity)
    .values(playerCharacters)
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
