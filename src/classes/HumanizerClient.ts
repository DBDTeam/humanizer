import { HumanizerConfig, LanguageCreator, Languages } from '@types';
import { BaseHumanizer } from "./BaseHumanizer";
import { Factors, Langs } from "../Constants";

export class HumanizerClient extends BaseHumanizer {
    /**
    * The Humanizer Client
    * @param {HumanizerConfig} config - The Humanizer Configuration
    * @example
    * ```js
    * const { HumanizerClient, DefaultConfig } = require("@dbdteam/humanizator")
    * 
    * const client = new HumanizerClient(DefaultConfig)
    * ```
    */
    constructor(options: HumanizerConfig) {
        super(options);
    };

    /**
    * Humanizes milliseconds.
    * @param {number} milliseconds - The milliseconds that will be used to humanize.
    * @param {LanguageCreator} [option] - The custom language.
    * @returns {string}
    * @example
    * ```js
    * const { HumanizerClient, DefaultConfig } = require("@dbdteam/humanizator")
    * 
    * const client = new HumanizerClient(DefaultConfig)
    * // 20 minutes
    * const result = client.humanizeMilliseconds(1000 * 60 * 20)
    * 
    * console.log(result)
    * ```
    */
    humanizeMilliseconds(milliseconds: number, option?: LanguageCreator) {
        const time: string[] = [], languages = this.config.language as Languages;
        const units_per_lang = option ?? Langs.get(languages) ?? Langs.get("en") as LanguageCreator;
        this.#editTime(time, milliseconds, units_per_lang);
        return this.#concatenate(time);
    }

    /**
    * Humanizes two stamps.
    * @param {number} stamp1 - The first stamp.
    * @param {number} [stamp2] - The second stamp.
    * @param {LanguageCreator} [option] - The custom Language
    * @returns {string}
    * @example
    * ```js
    * const { HumanizerClient, DefaultConfig } = require("@dbdteam/humanizator")
    * 
    * const client = new HumanizerClient(DefaultConfig)
    * // 20 minutes
    * const result = client.humanizeStamps(Date.now() + (1000 * 60 * 20))
    * 
    * console.log(result)
    * ```
    */
    humanizeStamps(stamp1: number, stamp2?: number, option?: LanguageCreator) {
        return this.humanizeMilliseconds(stamp1-(stamp2 || Date.now()), option);
    }

    /**
    * Humanizes two dates.
    * @param {Date} date1 - The first date to compare.
    * @param {Date} [date2] - The second date to compare.
    * @param {LanguageCreator} [option] - The custom language.
    * @returns {string}
    * @example
    * ```js
    * const { HumanizerClient, DefaultConfig } = require("@dbdteam/humanizator")
    * 
    * const client = new HumanizerClient(DefaultConfig)
    * // 20 minutes
    * const result = client.humanizeStamps(new Date(Date.now() + (1000 * 60 * 20)))
    * 
    * console.log(result)
    * ```
    */
    humanizeDate(date1: Date, date2?: Date, option?: LanguageCreator) {
        if (!date1 || !(date1 instanceof Date))
            throw new Error("[HumanizerError]: Please provide at least 1 valid date.");
        const milliseconds = date1.getTime() - (date2?.getTime() || Date.now());
        return this.humanizeMilliseconds(milliseconds, option);
    }

    /**
     * Returns a concatenated string.
     * @param {string[]} x - The array of units.
     * @returns {string}
     */
    #concatenate(x: string[]) {
        if (!this.config?.latest_separator) return x.join(", ");
        let result = "";
        if (x.length > 1) {
            result = x.slice(0, -1).join(", ");
            result += `${this.config.latest_separator}${x[x.length - 1]}`;
        } else if (x.length === 1) {
            result = x[0];
        }
        return result;
    };

    #editTime(time: string[], milliseconds: number, units_per_lang: LanguageCreator & Record<any, any>) {
        let count = 0;
        let index = 0;
        for (let unit of this.units) {
            // ...
            if (typeof(this.config.max_units) === "number" && this.config.max_units <= count) 
                continue;

            // ...
            if (Object.getOwnPropertyDescriptor(this.config.default_format, unit)!.value === true && Factors[unit]) {
                let y = milliseconds / Factors[unit];
                const value = Number(
                    this.config?.enable_comma &&
                        (this.units.length - 1 == Number(index) ||
                        this.config.max_units === count + 1)
                            ? y.toFixed(this.config?.max_decimal)
                            : Math.floor(y)
                );
                milliseconds %= Factors[unit];
                if (value > 0) {
                    time.push(
                        `${value.toString().replace(".", this.config?.decimal || ".")} ${
                            units_per_lang[unit][value === 1 ? 0 : 1]
                        }`
                    );
                    count++;
                };
            };
            index++;
        };
    };
};

/* @test
const hm = new HumanizerClient({
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
        days: false
    },
    language: "en"
});
console.log(hm.humanizeMilliseconds(1000 * 60 * 20));
*/