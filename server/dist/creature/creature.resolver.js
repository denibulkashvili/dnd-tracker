"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const creature_service_1 = require("./creature.service");
const creature_entity_1 = require("./creature.entity");
let CreatureResolver = class CreatureResolver {
    constructor(creatureService) {
        this.creatureService = creatureService;
    }
    async getCreatures() {
        return this.creatureService.getAllCreatures();
    }
};
tslib_1.__decorate([
    graphql_1.Query(() => [creature_entity_1.CreatureEntity]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CreatureResolver.prototype, "getCreatures", null);
CreatureResolver = tslib_1.__decorate([
    graphql_1.Resolver('Creature'),
    tslib_1.__metadata("design:paramtypes", [creature_service_1.CreatureService])
], CreatureResolver);
exports.CreatureResolver = CreatureResolver;
