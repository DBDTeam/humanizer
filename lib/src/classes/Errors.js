"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigError = void 0;
class ConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = "[HumanizerConfigError]";
    }
}
exports.ConfigError = ConfigError;
