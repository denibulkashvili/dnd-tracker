"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const env_1 = tslib_1.__importDefault(require("../config/env"));
const dbConfig = {
    type: 'sqlite',
    database: env_1.default.DB_FILE,
    synchronize: false,
    entities: [__dirname + '/../**/*.entity.ts'],
    migrations: ['./migrations/*.ts'],
    cli: {
        migrationsDir: './migrations',
    },
};
exports.default = dbConfig;
