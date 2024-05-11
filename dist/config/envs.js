"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    //Take the values from .env file
    PORT: (0, env_var_1.get)('PORT').required().asPortNumber(),
    PUBLIC_PATH: (0, env_var_1.get)('PUBLIC_PATH').required().asString(),
    //MONGO_URI: get('MONGO_URI').required().asString(),
    //MONGO_DB: get('MONGO_DB').required().asString()
};
