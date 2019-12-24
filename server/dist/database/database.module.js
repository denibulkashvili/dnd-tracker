"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = tslib_1.__importDefault(require("./config"));
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(config_1.default)],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
