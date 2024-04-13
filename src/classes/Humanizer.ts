import { Langs } from "../../langs_units";
import { HumanizerConfig } from "../typings/interfaces/Humanizer";

export class HumanizerClient {
  config: Record<any, any>;

  constructor(config: HumanizerConfig) {
    if (!config?.default_format)
      throw new Error(
        "[HumanizerError]: Please specify at least one time format."
      );

    this.config = config;
  }

  humanizeDate(date1: Date, date2?: Date) {
    if (!date1 || !(date1 instanceof Date))
      throw new Error(
        "[HumanizerError]: Please provide at least 1 valid date."
      );

    const milliseconds = date1.getTime() - (date2?.getTime() || Date.now());
    return this.humanize(milliseconds / 1000);
  }

  private humanize(seconds: number): string {
    const timeParts = [];
    // @ts-ignore
    const units_per_lang = Langs?.[this.config.language] || Langs.en;
    const units = ["weeks", "days", "hours", "minutes", "seconds"];
    let remainingSeconds = seconds;

    for (const unit of units) {
      if (this.config.default_format[unit]) {
        let value = 0;
        if (unit === "weeks") {
          value = Math.floor(remainingSeconds / 604800);
          remainingSeconds %= 604800;
        } else if (unit === "days") {
          value = Math.floor(remainingSeconds / 86400);
          remainingSeconds %= 86400;
        } else if (unit === "hours") {
          value = Math.floor(remainingSeconds / 3600);
          remainingSeconds %= 3600;
        } else if (unit === "minutes") {
          value = Math.floor(remainingSeconds / 60);
          remainingSeconds %= 60;
        } else if (unit === "seconds") {
          value = Math.floor(remainingSeconds);
          remainingSeconds -= value;
        }

        if (value > 0) {
          timeParts.push(
            `${value} ${units_per_lang[unit][value === 1 ? 0 : 1]}`
          );
        }
      }
    }

    var result = "";

    if (timeParts.length > 1) {
      result = timeParts.slice(0, -1).join(", ");
      result += `${this.config.latest_concatenator}${
        timeParts[timeParts.length - 1]
      }`;
    } else if (timeParts.length === 1) {
      result = timeParts[0];
    }

    return result;
  }
}
