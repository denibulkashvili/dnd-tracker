"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const env_1 = tslib_1.__importDefault(require("../config/env"));
let GraphqlService = class GraphqlService {
    constructor() { }
    async createGqlOptions() {
        return {
            autoSchemaFile: 'src/graphql/schema.gql',
            playground: !env_1.default.production,
        };
    }
};
GraphqlService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], GraphqlService);
exports.GraphqlService = GraphqlService;
