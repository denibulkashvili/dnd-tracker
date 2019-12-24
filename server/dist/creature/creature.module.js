"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const creature_resolver_1 = require("./creature.resolver");
const creature_service_1 = require("./creature.service");
let CreatureModule = class CreatureModule {
};
CreatureModule = tslib_1.__decorate([
    common_1.Module({
        providers: [creature_resolver_1.CreatureResolver, creature_service_1.CreatureService]
    })
], CreatureModule);
exports.CreatureModule = CreatureModule;
