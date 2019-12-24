import { createConnection, Connection } from 'typeorm'
import dbConfig from '../src/database/config'

export default async function() {
  let connection: Connection | null = null
  try {
    connection = await createConnection({ ...dbConfig, dropSchema: true })
    await connection.close()
  } catch (error) {
    console.log({ error })
    if (connection) {
      await connection.close()
    }
  }
}
