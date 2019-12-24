"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const path = process.env.NODE_ENV === 'test' ? '.env' : `${process.env.NODE_ENV || 'dev'}.env`;
const env = dotenv_1.default.config({ path });
exports.default = {
    ...(env.error ? process.env : env.parsed),
    production: process.env.NODE_ENV === 'production',
};
