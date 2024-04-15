"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseHumanizer_instances, _BaseHumanizer_checkConfig;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHumanizer = void 0;
const Constants_1 = require("../Constants");
const Errors_1 = require("./Errors");
/**
 * Ensures the last separator.
 * @param {string} text - The separator to be ensured.
 * @returns {string}
 */
function ensureSpaces(text) {
    if (text.startsWith(" ") && text.endsWith(" "))
        return text;
    return ` ${text} `;
}
class BaseHumanizer {
    /**
     * Humanizer setup options.
     * @param {HumanizerConfig} options - Humanizer configuration options.
     */
    constructor(options) {
        _BaseHumanizer_instances.add(this);
        this.units = Constants_1.Units;
        this.valid_languages = Array.from(Constants_1.Langs.keys());
        // Validate constructor options.
        __classPrivateFieldGet(this, _BaseHumanizer_instances, "m", _BaseHumanizer_checkConfig).call(this, options);
        this.config = options;
        if (this.config.latest_separator) {
            this.config.latest_separator = ensureSpaces(this.config.latest_separator);
        }
    }
}
exports.BaseHumanizer = BaseHumanizer;
_BaseHumanizer_instances = new WeakSet(), _BaseHumanizer_checkConfig = function _BaseHumanizer_checkConfig(options) {
    // Default format validation.
    if (!options.default_format)
        throw new Errors_1.ConfigError("Please, input a valid format.");
    for (const unit of this.units) {
        // Default format validation.
        if (!Object.prototype.hasOwnProperty.call(options.default_format, unit))
            throw new Errors_1.ConfigError("There are some undefined units in Options#default_format, please input a valid format.");
        else if (typeof (Object.getOwnPropertyDescriptor(options.default_format, unit).value) !== "boolean")
            throw new Errors_1.ConfigError(`default_format#${unit} expected a boolean, got a ${typeof (unit)}.`);
        // Language validation.
        if (options.language && !this.valid_languages.includes(options.language.toLowerCase()))
            throw new Errors_1.ConfigError(`Please, select a valid language. Valid languages: "${this.valid_languages.join(", ")}"`);
        // Comma validation.
        if (options.enable_comma && typeof (options.enable_comma) !== "boolean")
            throw new Errors_1.ConfigError(`enable_comma expected a boolean, got a ${typeof (options.enable_comma)}.`);
        // Decimal validation.
        let max_decimal = options.max_decimal ?? 2;
        if (max_decimal > 20 || max_decimal < 1)
            throw new Errors_1.ConfigError(`max_decimal must be between 2 and 20, got ${max_decimal}.`);
        // Max units validation.
        if (options.max_units && (options.max_units > this.units.length || options.max_units < 1))
            throw new Errors_1.ConfigError(`max_units must be between 2 and ${this.units.length}, got ${max_decimal}.`);
        // Pre-spacer and post-spacer validations.
        if (options.pre_spacer && typeof options.pre_spacer !== "string")
            throw new Errors_1.ConfigError(`Options#pre_spacer expected a string, got a ${typeof (options.pre_spacer)}.`);
        if (options.post_spacer && typeof options.post_spacer !== "string")
            throw new Errors_1.ConfigError(`Options#post_spacer expected a string, got a ${typeof (options.post_spacer)}.`);
    }
};
;
