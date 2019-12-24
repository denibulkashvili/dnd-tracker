"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const graphql_module_1 = require("../graphql/graphql.module");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, graphql_module_1.GraphqlModule],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
