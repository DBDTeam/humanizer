import { Langs } from "../../langs_units";
import { HumanizerConfig } from "../typings/interfaces/Humanizer";
import { BaseHumanizer } from "./BaseHumanizer";

export class HumanizerClient extends BaseHumanizer {
  constructor(config: HumanizerConfig) {
    super(config);
  }

  humanizeMilliseconds(milliseconds: number, option?: Record<any, any>): string {
    const time: any[] = [];
    //@ts-ignore
    var units_per_lang = option || Langs?.[this.config.language] || Langs.en;

    this.edit_time(time, milliseconds, units_per_lang);

    return this.concatenate(time);
  }

  humanizeStamps(stamp1: number, stamp2?: number, option?: Record<any, any>) {

    return this.humanizeMilliseconds(stamp1-(stamp2 || Date.now()), option);
  }

  humanizeDate(date1: Date, date2?: Date, option?: Record<any, any>) {
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
              this.config.max_units === count+1)
            ? y.toFixed(this.config?.max_decimal)
            : Math.floor(y)
        );
        milliseconds %= factors[unit];

        if (value > 0) {
          time.push(
            `${value.toString().replace(".", this.config?.decimal || ".")} ${
              units_per_lang[unit][value === 1 ? 0 : 1]
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