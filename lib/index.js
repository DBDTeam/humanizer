"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanizerClient = exports.DefaultConfig = exports.Langs = void 0;
var langs_units_1 = require("./langs_units");
Object.defineProperty(exports, "Langs", { enumerable: true, get: function () { return langs_units_1.Langs; } });
var BaseHumanizer_1 = require("./src/classes/BaseHumanizer");
Object.defineProperty(exports, "DefaultConfig", { enumerable: true, get: function () { return BaseHumanizer_1.DefaultConfig; } });
var HumanizerClient_1 = require("./src/classes/HumanizerClient");
Object.defineProperty(exports, "HumanizerClient", { enumerable: true, get: function () { return HumanizerClient_1.HumanizerClient; } });
