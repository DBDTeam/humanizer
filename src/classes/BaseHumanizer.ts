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

export class BaseHumanizer {
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
      "milliseconds",
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
      "gu",
    ];
    this.check_config(config);

    this.config = config;
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

    if (
      config?.language &&
      !this.valid_languages.includes(config?.language?.toLowerCase())
    )
      throw new Error(
        `[HumanizerConfigError]: Please, select a valid language. Valid languages: ${this.valid_languages}`
      );
    if (config?.language) {
      config.language = config.language as Languages;
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

    if (
      (config?.max_units && config.max_units > this.units.length) || //@ts-ignore
      config.max_units < 1
    )
      throw new Error(
        `[HumanizerConfigError]: Please, in the option 'max_units', you must place a valid number between 2 and ${this.units.length}`
      );
  }
}