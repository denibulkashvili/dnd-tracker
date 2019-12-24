"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const graphql_service_1 = require("./graphql.service");
let GraphqlModule = class GraphqlModule {
};
GraphqlModule = tslib_1.__decorate([
    common_1.Module({
        providers: [graphql_service_1.GraphqlService]
    })
], GraphqlModule);
exports.GraphqlModule = GraphqlModule;
