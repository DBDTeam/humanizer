"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanizerError = exports.ConfigError = void 0;
class ConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = "[HumanizerConfigError]";
    }
}
exports.ConfigError = ConfigError;
;
class HumanizerError extends Error {
    constructor(message) {
        super(message);
        this.name = "[HumanizerError]";
    }
}
exports.HumanizerError = HumanizerError;
;
