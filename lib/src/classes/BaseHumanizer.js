"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHumanizer = void 0;
const Constants_1 = require("../Constants");
const Errors_1 = require("./Errors");
class BaseHumanizer {
    /** All valid time units. */
    units;
    /** All supported languages. */
    valid_languages;
    /** Humanizer configuration options. */
    config;
    /**
     * Humanizer setup options.
     * @param {HumanizerConfig} options - Humanizer configuration options.
     */
    constructor(options) {
        this.units = Object.freeze(Constants_1.Units);
        this.valid_languages = Array.from(Constants_1.Langs.keys());
        // Validate constructor options.
        this.#checkConfig(options);
        this.config = options;
    }
    /**
     * Check all Humanizer constructor options.
     * @param {HumanizerConfig} options - Humanizer configuration options.
     * @returns {void}
     */
    #checkConfig(options) {
        // Default format validation.
        if (!options.default_format)
            throw new Errors_1.ConfigError("Please, input a valid format.");
        for (const unit of this.units) {
            // Default format validation.
            if (!Object.prototype.hasOwnProperty.call(options.default_format, unit))
                throw new Errors_1.ConfigError("There are some undefined units, please input a valid format.");
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
        }
    }
}
exports.BaseHumanizer = BaseHumanizer;
;
/* @test
const hm = new BaseHumanizer({
    default_format: {
        milliseconds: true,
        seconds: false,
        minutes: false,
        hours: false,
        weeks: true,
        months: false,
        years: true,
        lustrums: false,
        decades: false,
        days: "hola"
    }
});
const x = hm.config;
console.log('IGNORE ->', x);
*/ 
