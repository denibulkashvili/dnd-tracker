"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
let CreatureEntity = class CreatureEntity {
};
tslib_1.__decorate([
    type_graphql_1.Field(_type => type_graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], CreatureEntity.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], CreatureEntity.prototype, "name", void 0);
CreatureEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], CreatureEntity);
exports.CreatureEntity = CreatureEntity;
