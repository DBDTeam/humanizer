import { HumanizerConfig } from '@types';
import { Langs, Units } from '../Constants';
import { ConfigError } from "./Errors";

class BaseHumanizer {
    /** All valid time units. */
    readonly units: readonly string[];
    /** All supported languages. */
    readonly valid_languages: readonly string[];
    /** Humanizer configuration options. */
    config: HumanizerConfig;
    /**
     * Humanizer setup options.
     * @param {HumanizerConfig} options - Humanizer configuration options.
     */
    constructor(options: HumanizerConfig) {
        this.units = Object.freeze(Units);
        this.valid_languages = Object.freeze(Array.from(Object.keys(Langs)));

        // Validate constructor options.
        this.#checkConfig(options);
        this.config = options;
    }

    /**
     * Check all Humanizer constructor options.
     * @param {HumanizerConfig} options - Humanizer configuration options.
     * @returns {void}
     */
    #checkConfig(options: HumanizerConfig) {
        // Default format validation.
        if (!options.default_format)
            throw new ConfigError("Please, input a valid format.");

        for (const unit of this.units) {
            // Default format validation.
            if (!Object.prototype.hasOwnProperty.call(options.default_format, unit))
                throw new ConfigError("There are some undefined units, please input a valid format.");
            else if (typeof(Object.getOwnPropertyDescriptor(options.default_format, unit)!.value) !== "boolean")
                throw new ConfigError(`default_format#${unit} expected a boolean, got a ${typeof(unit)}.`);

            // Language validation.
            if (options.language && !this.valid_languages.includes(options.language.toLowerCase()))
                throw new ConfigError(`Please, select a valid language. Valid languages: "${this.valid_languages.join(", ")}"`);

            // Comma validation.
            if (options.enable_comma && typeof(options.enable_comma) !== "boolean")
                throw new ConfigError(`enable_comma expected a boolean, got a ${typeof(options.enable_comma)}.`);

            // Decimal validation.
            let max_decimal = options.max_decimal ?? 2;
            if (max_decimal > 20 || max_decimal < 1)
                throw new ConfigError(`max_decimal must be between 2 and 20, got ${max_decimal}.`);

            // Max units validation.
            if (options.max_units && (options.max_units > this.units.length || options.max_units < 1))
                throw new ConfigError(`max_units must be between 2 and ${this.units.length}, got ${max_decimal}.`);
        }
    }
};

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