import { Langs } from "../../langs_units";
import { Languages } from "../typings/enums/Languages";
import { HumanizerConfig } from "../typings/interfaces/Humanizer";

export const DefaultConfig: HumanizerConfig = {
  default_format: {
    seconds: true,
    minutes: true,
    hours: true,
    days: true,
    weeks: true,
  },
  enable_comma: false,
  language: "en",
  latest_separator: " and ",
};

export class HumanizerClient {
  config: HumanizerConfig;
  readonly units: string[];
  readonly valid_languages: string[];

  constructor(config: HumanizerConfig) {
    this.units = [
      "decades",
      "lustrums",
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
    ];
    this.valid_languages = [
      "es",
      "en",
      "pt",
      "fr",
      "it",
      "zh",
      "sv",
      "de",
      "ru",
      "nl",
      "ko",
      "ja",
      "ar",
      "hi",
      "fa",
      "ta",
      "te",
      "bn",
      "gu"
    ];
    this.check_config(config);

    this.config = config;
  }

  humanizeDate(date1: Date, date2?: Date, option?: Record<any, any>) {
    if (!date1 || !(date1 instanceof Date))
      throw new Error(
        "[HumanizerError]: Please provide at least 1 valid date."
      );

    const milliseconds = date1.getTime() - (date2?.getTime() || Date.now());
    return this.humanize(milliseconds / 1000, option);
  }

  private humanize(seconds: number, option?: Record<any, any>): string {
    const time: any[] = [];
    // @ts-ignore
    var units_per_lang = option || Langs?.[this.config.language] || Langs.en;

    let remainingSeconds = seconds;

    this.edit_time(time, remainingSeconds, units_per_lang)

    return this.concatenate(time);
  }

  private check_config(config: HumanizerConfig) {
    if (!config?.default_format)
      throw new Error(`[HumanizerConfigError]: Please, input a valid format.`);

    for (let i of this.units) {
      // @ts-ignore
      const x = config?.default_format?.[i];
      if (
        !Object.keys(config?.default_format).includes(i) &&
        x &&
        !(x instanceof Boolean || typeof x === "boolean")
      )
        throw new Error(`[HumanizerConfigError]: Please, input a valid format`);
    }

    if (config?.language && !this.valid_languages.includes(config?.language?.toLowerCase()))
      throw new Error(
        `[HumanizerConfigError]: Please, select a valid language. Valid languages: ${this.valid_languages}`
      );
      if(config?.language) {
        config.language = config.language as Languages
      }
    if (
      config?.enable_comma &&
      !(
        (config?.enable_comma as any) instanceof Boolean ||
        typeof config?.enable_comma === "boolean"
      )
    )
      throw new Error(
        `[HumanizerConfigError]: Please, in the option 'enable_comma' is expected a Boolean.`
      );

    if (
      (config?.max_decimal && config?.max_decimal > 20) || //@ts-ignore
      config?.max_decimal < 1
    )
      throw new Error(
        `[HumanizerConfigError]: Please, in the option 'max_decimal', you must place a valid number between 2 and 20`
      );
  }

  private edit_time(time: any[], remainingSeconds: number, units_per_lang: any) {
    const factors: Record<any, any> = {
      decades: 311040000,
      lustrums: 155520000,
      years: 31104000,
      months: 2592000,
      weeks: 604800,
      days: 86400,
      hours: 3600,
      minutes: 60,
      seconds: 1,
    };

    for (let f in this.units) {
      const unit = this.units[f];
      // @ts-ignore// @ts-ignore
      if (this.config.default_format[unit] && factors[unit]) {
        let y = remainingSeconds / factors[unit];
        const value = Number(
          this.config?.enable_comma && this.units.length - 1 == Number(f)
            ? y.toFixed(this.config?.max_decimal)
            : Math.floor(y)
        );
        remainingSeconds %= factors[unit];

        if (value > 0) {
          time.push(
            `${value.toString().replace(".", this.config?.decimal || ".")} ${
              units_per_lang[unit][value === 1 ? 0 : 1]
            }`
          );
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
