import { Languages } from "../enums/Languages";

export declare interface Formats {
  /**
   * If milliseconds is enabled to use when humanizing.
   */
  milliseconds?: boolean;
  /**
   * If seconds is enabled to use when humanizing.
   */
  seconds?: boolean;
  /**
   * If minutes is enabled to use when humanizing.
   */
  minutes?: boolean;
  /**
   * If hours is enabled to use when humanizing.
   */
  hours?: boolean;
  /**
   * If days is enabled to use when humanizing.
   */
  days?: boolean;
  /**
   * If weeks is enabled to use when humanizing.
   */
  weeks?: boolean;
  /**
   * If months is enabled to use when humanizing.
   */
  months?: boolean;
  /**
   * If years is enabled to use when humanizing.
   */
  years?: boolean;
  /**
   * If lustrums is enabled to use when humanizing.
   */
  lustrums?: boolean;
  /**
   * If decades is enabled to use when humanizing.
   */
  decades?: boolean;
}

export interface HumanizerConfig {
  /**
   * The default format of how to display the content.
   */
  default_format: Formats;
  /**
   * When you want to enable the comma in the latest value, e.g:
   * @example
   * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes, 3.87 seconds.
   */
  enable_comma?: boolean;
  /**
   * This means when you want to add a latest separator in the humanized time, e.g:
   * @example
   * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes (concatenator) and 3 seconds.
   */
  latest_separator?: string;
  /**
   * The language that will be humanizated the time.
   * @example
   * 3 hours, 17 minutes, 3 seconds => 3 horas, 17 minutos, 3 segundos
   */
  language?: Languages;
  /**
   * Represents the maximum number of decimal places the last number can have.
   * @example
   * 3 hours, 17 minutes, 3.125 seconds => (in the case of max_decimal = 2) 3 hours, 17 minutes, 3.12 seconds.
   */
  max_decimal?: number;
  /**
   * Represents the replacement for the comma with another character of your choice.
   * @example
   * 3 hours, 17 minutes, 3.125 seconds => (in the case of decimal=",") 3 hours, 17 minutes, 3,125 seconds
   */
  decimal?: string;
  /**
   * Represents the maximum number of units the text can have when humanizing.
   * @example
   * 3 hours, 17 minutes, 3 seconds => (in the case of max_units = 2) 3 hours, 17 minutes.
   */
  max_units?: number;
  post_spacer?: string;
  pre_spacer?: string;
}

/**
 * Represents the object of the LanguageCreator.
 */
export interface LanguageCreator {
  /**
   * Represents the new name of decades
   * @example
   * ```
   * { decades: ["singular", "plural"] }
   */
  decades?: string[]
  /**
   * Represents the new name of lustrumns
   * @example
   * ```
   * { lustrums: ["singular", "plural"] }
   */
  lustrums?: string[]
  /**
   * Represents the new name of years
   * @example
   * ```
   * { years: ["singular", "plural"] }
   */
  years?: string[]
  /**
   * Represents the new name of months
   * @example
   * ```
   * { months: ["singular", "plural"] }
   */
  months?: string[]
  /**
   * Represents the new name of weeks
   * @example
   * ```
   * { weeks: ["singular", "plural"] }
   */
  weeks?: string[]
  /**
   * Represents the new name of days
   * @example
   * ```
   * { days: ["singular", "plural"] }
   */
  days?: string[]
  /**
   * Represents the new name of hours
   * @example
   * ```
   * { hours: ["singular", "plural"] }
   */
  hours?: string[]
  /**
   * Represents the new name of minutes
   * @example
   * ```
   * { minutes: ["singular", "plural"] }
   */
  minutes?: string[]
  /**
   * Represents the new name of seconds
   * @example
   * ```
   * { seconds: ["singular", "plural"] }
   */
  seconds?: string[]
  /**
   * Represents the new name of milliseconds
   * @example
   * ```
   * { milliseconds: ["singular", "plural"] }
   */
  milliseconds?: string[]
}