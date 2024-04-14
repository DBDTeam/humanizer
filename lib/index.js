"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanizerClient = exports.DefaultConfig = void 0;
const HumanizerClient_1 = require("./classes/HumanizerClient");
Object.defineProperty(exports, "HumanizerClient", { enumerable: true, get: function () { return HumanizerClient_1.HumanizerClient; } });
/** The default config for these that are learning to use the humanizer. */
const DefaultConfig = {
    default_format: {
        milliseconds: true,
        seconds: true,
        minutes: true,
        hours: true,
        days: true,
        weeks: true,
        months: true,
        years: true,
        lustrums: true,
        decades: true
    },
    enable_comma: false,
    language: "en",
    latest_separator: "and",
};
exports.DefaultConfig = DefaultConfig;
exports.default = { DefaultConfig, HumanizerClient: HumanizerClient_1.HumanizerClient };
