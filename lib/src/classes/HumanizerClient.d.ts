import { HumanizerConfig, LanguageCreator } from '@types';
import { BaseHumanizer } from "./BaseHumanizer";
export declare class HumanizerClient extends BaseHumanizer {
    #private;
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
    constructor(options: HumanizerConfig);
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
    humanizeMilliseconds(milliseconds: number, option?: LanguageCreator): string;
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
    humanizeStamps(stamp1: number, stamp2?: number, option?: LanguageCreator): string;
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
    humanizeDate(date1: Date, date2?: Date, option?: LanguageCreator): string;
}
