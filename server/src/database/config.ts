import { ConnectionOptions } from 'typeorm'
import env from '../config/env'

const dbConfig: ConnectionOptions = {
  type: 'sqlite',
  database: env.DB_FILE,
  synchronize: false,
  entities: [__dirname + '/../**/*.entity.ts'],
  migrations: ['./migrations/*.ts'],
  cli: {
    migrationsDir: './migrations',
  },
}

export default dbConfig
