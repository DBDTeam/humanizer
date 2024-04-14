"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HumanizerClient_instances, _HumanizerClient_concatenate, _HumanizerClient_editTime;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanizerClient = void 0;
const BaseHumanizer_1 = require("./BaseHumanizer");
const Constants_1 = require("../Constants");
class HumanizerClient extends BaseHumanizer_1.BaseHumanizer {
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
    constructor(options) {
        super(options);
        _HumanizerClient_instances.add(this);
    }
    ;
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
    humanizeMilliseconds(milliseconds, option) {
        const time = [], languages = this.config.language;
        const units_per_lang = option ?? Constants_1.Langs.get(languages) ?? Constants_1.Langs.get("en");
        __classPrivateFieldGet(this, _HumanizerClient_instances, "m", _HumanizerClient_editTime).call(this, time, milliseconds, units_per_lang);
        return __classPrivateFieldGet(this, _HumanizerClient_instances, "m", _HumanizerClient_concatenate).call(this, time);
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
    humanizeStamps(stamp1, stamp2, option) {
        return this.humanizeMilliseconds(stamp1 - (stamp2 || Date.now()), option);
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
    humanizeDate(date1, date2, option) {
        if (!date1 || !(date1 instanceof Date))
            throw new Error("[HumanizerError]: Please provide at least 1 valid date.");
        const milliseconds = date1.getTime() - (date2?.getTime() || Date.now());
        return this.humanizeMilliseconds(milliseconds, option);
    }
    ;
    ;
}
exports.HumanizerClient = HumanizerClient;
_HumanizerClient_instances = new WeakSet(), _HumanizerClient_concatenate = function _HumanizerClient_concatenate(x) {
    if (!this.config?.latest_separator)
        return x.join(", ");
    let result = "";
    if (x.length > 1) {
        result = x.slice(0, -1).join(", ");
        result += `${this.config.latest_separator}${x[x.length - 1]}`;
    }
    else if (x.length === 1) {
        result = x[0];
    }
    return result;
}, _HumanizerClient_editTime = function _HumanizerClient_editTime(time, milliseconds, units_per_lang) {
    let count = 0;
    let index = 0;
    for (let unit of this.units) {
        // ...
        if (typeof (this.config.max_units) === "number" && this.config.max_units <= count)
            continue;
        // ...
        if (Object.getOwnPropertyDescriptor(this.config.default_format, unit).value === true && Constants_1.Factors[unit]) {
            let y = milliseconds / Constants_1.Factors[unit];
            const value = Number(this.config?.enable_comma &&
                (this.units.length - 1 == Number(index) ||
                    this.config.max_units === count + 1)
                ? y.toFixed(this.config?.max_decimal)
                : Math.floor(y));
            milliseconds %= Constants_1.Factors[unit];
            if (value > 0) {
                time.push(`${value.toString().replace(".", this.config?.decimal || ".")} ${units_per_lang[unit][value === 1 ? 0 : 1]}`);
                count++;
            }
            ;
        }
        ;
        index++;
    }
    ;
};
;
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
