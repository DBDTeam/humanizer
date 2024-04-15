"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCreatorBuilder = exports.HumanizerConfigBuilder = exports.HumanizerClient = exports.DefaultConfig = void 0;
const HumanizerConfigBuilder_1 = require("./builders/HumanizerConfigBuilder");
Object.defineProperty(exports, "HumanizerConfigBuilder", { enumerable: true, get: function () { return HumanizerConfigBuilder_1.HumanizerConfigBuilder; } });
const LanguageCreatorBuilder_1 = require("./builders/LanguageCreatorBuilder");
Object.defineProperty(exports, "LanguageCreatorBuilder", { enumerable: true, get: function () { return LanguageCreatorBuilder_1.LanguageCreatorBuilder; } });
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
exports.default = { DefaultConfig, HumanizerClient: HumanizerClient_1.HumanizerClient, HumanizerConfigBuilder: HumanizerConfigBuilder_1.HumanizerConfigBuilder, LanguageCreatorBuilder: LanguageCreatorBuilder_1.LanguageCreatorBuilder };
