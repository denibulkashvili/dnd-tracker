"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const creature_entity_1 = require("./creature.entity");
let CreatureService = class CreatureService {
    constructor(connection) {
        this.connection = connection;
    }
    async getAllCreatures() {
        return this.connection.transaction(async (trx) => {
            return trx.find(creature_entity_1.CreatureEntity);
        });
    }
};
CreatureService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Connection])
], CreatureService);
exports.CreatureService = CreatureService;
