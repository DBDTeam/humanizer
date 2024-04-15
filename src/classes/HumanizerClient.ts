import { Langs } from "../../langs_units";
import {
  HumanizerConfig,
  LanguageCreator,
} from "../typings/interfaces/Humanizer";
import { BaseHumanizer } from "./BaseHumanizer";

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
  constructor(config: HumanizerConfig) {
    super(config);
  }

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

  humanizeMilliseconds(milliseconds: number, option?: LanguageCreator): string {
    const time: any[] = [];
    //@ts-ignore
    var units_per_lang = option || Langs?.[this.config.language] || Langs.en;

    this.edit_time(time, milliseconds, units_per_lang);

    return this.concatenate(time);
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

  humanizeStamps(
    stamp1: number,
    stamp2?: number,
    option?: LanguageCreator
  ): string {
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
  humanizeDate(date1: Date, date2?: Date, option?: LanguageCreator): string {
    if (!date1 || !(date1 instanceof Date))
      throw new Error(
        "[HumanizerError]: Please provide at least 1 valid date."
      );

    const milliseconds = date1.getTime() - (date2?.getTime() || Date.now());
    return this.humanizeMilliseconds(milliseconds, option);
  }
  private edit_time(time: any[], milliseconds: number, units_per_lang: any) {
    const factors: Record<any, any> = {
      decades: 311040000000,
      lustrums: 155520000000,
      years: 31104000000,
      months: 2592000000,
      weeks: 604800000,
      days: 86400000,
      hours: 3600000,
      minutes: 60000,
      seconds: 1000,
      milliseconds: 1,
    };

    var count = 0;

    for (let f in this.units) {
      const unit = this.units[f];

      if (
        //@ts-ignore
        (this.config.max_units instanceof Number ||
          typeof this.config.max_units === "number") &&
        this.config.max_units <= count
      )
        continue;
      // @ts-ignore
      if (this.config.default_format[unit] && factors[unit]) {
        let y = milliseconds / factors[unit];
        const value = Number(
          this.config?.enable_comma &&
            (this.units.length - 1 == Number(f) ||
              this.config.max_units === count + 1)
            ? y.toFixed(this.config?.max_decimal)
            : Math.floor(y)
        );
        milliseconds %= factors[unit];

        if (value > 0) {
          time.push(
            `${value.toString().replace(".", this.config?.decimal || ".")}${
              this.config.pre_spacer ? this.config.pre_spacer : ""
            } ${units_per_lang[unit][value === 1 ? 0 : 1]}${
              this.config.post_spacer ? this.config.post_spacer : ""
            }`
          );
          count++;
        }
      }
    }
  }

  private concatenate(x: string[]) {
    if (!this.config?.latest_separator) return x.join(", ");
    var result = "";
    if (x.length > 1) {
      result = x.slice(0, -1).join(", ");
      result += `${this.config.latest_separator}${x[x.length - 1]}`;
    } else if (x.length === 1) {
      result = x[0];
    }

    return result;
  }
}
