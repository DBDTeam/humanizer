"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanizerClient = exports.DefaultConfig = void 0;
const langs_units_1 = require("../../langs_units");
exports.DefaultConfig = {
    default_format: {
        seconds: true,
        minutes: true,
        hours: true,
        days: true,
        weeks: true,
    },
    enable_comma: false,
    language: "en",
};
class HumanizerClient {
    config;
    constructor(config) {
        if (!config?.default_format)
            throw new Error("[HumanizerError]: Please specify at least one time format.");
        this.config = config;
    }
    humanizeDate(date1, date2, option) {
        if (!date1 || !(date1 instanceof Date))
            throw new Error("[HumanizerError]: Please provide at least 1 valid date.");
        const milliseconds = date1.getTime() - (date2?.getTime() || Date.now());
        return this.humanize(milliseconds / 1000, option);
    }
    humanize(seconds, option) {
        const timeParts = [];
        // @ts-ignore
        var units_per_lang = option || langs_units_1.Langs?.[this.config.language] || langs_units_1.Langs.en;
        const units = [
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
        let remainingSeconds = seconds;
        for (const unit of units) {
            if (this.config.default_format[unit]) {
                let value = 0;
                if (unit === "decades") {
                    value = Math.floor(remainingSeconds / 311040000);
                    remainingSeconds %= 311040000;
                }
                else if (unit === "lustrums") {
                    value = Math.floor(remainingSeconds / 155520000);
                    remainingSeconds %= 155520000;
                }
                else if (unit === "years") {
                    value = Math.floor(remainingSeconds / 31104000);
                    remainingSeconds %= 31104000;
                }
                else if (unit === "months") {
                    value = Math.floor(remainingSeconds / 2592000);
                    remainingSeconds %= 2592000;
                }
                else if (unit === "weeks") {
                    value = Math.floor(remainingSeconds / 604800);
                    remainingSeconds %= 604800;
                }
                else if (unit === "days") {
                    value = Math.floor(remainingSeconds / 86400);
                    remainingSeconds %= 86400;
                }
                else if (unit === "hours") {
                    value = Math.floor(remainingSeconds / 3600);
                    remainingSeconds %= 3600;
                }
                else if (unit === "minutes") {
                    value = Math.floor(remainingSeconds / 60);
                    remainingSeconds %= 60;
                }
                else if (unit === "seconds") {
                    value = Math.floor(remainingSeconds);
                    remainingSeconds -= value;
                }
                if (!Object.keys(units_per_lang).includes(unit)) {
                    // @ts-ignore
                    units_per_lang = langs_units_1.Langs?.[this.config.language] || langs_units_1.Langs.en;
                }
                if (value > 0) {
                    timeParts.push(`${value} ${units_per_lang[unit][value === 1 ? 0 : 1]}`);
                }
            }
        }
        var result = "";
        if (timeParts.length > 1) {
            result = timeParts.slice(0, -1).join(", ");
            result += `${this.config.latest_concatenator}${timeParts[timeParts.length - 1]}`;
        }
        else if (timeParts.length === 1) {
            result = timeParts[0];
        }
        return result;
    }
}
exports.HumanizerClient = HumanizerClient;