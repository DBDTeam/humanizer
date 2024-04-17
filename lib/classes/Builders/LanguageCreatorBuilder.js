"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCreatorBuilder = void 0;
class LanguageCreatorBuilder {
    constructor() {
        this.milliseconds = undefined;
        this.seconds = undefined;
        this.minutes = undefined;
        this.hours = undefined;
        this.days = undefined;
        this.weeks = undefined;
        this.months = undefined;
        this.years = undefined;
        this.lustrums = undefined;
        this.decades = undefined;
    }
    setMilliseconds(v) {
        const [singular, plural] = v;
        this.milliseconds = [singular, plural];
        return this;
    }
    setSeconds(v) {
        const [singular, plural] = v;
        this.seconds = [singular, plural];
        return this;
    }
    setMinutes(v) {
        const [singular, plural] = v;
        this.minutes = [singular, plural];
        return this;
    }
    setHours(v) {
        const [singular, plural] = v;
        this.hours = [singular, plural];
        return this;
    }
    setDays(v) {
        const [singular, plural] = v;
        this.days = [singular, plural];
        return this;
    }
    setWeeks(v) {
        const [singular, plural] = v;
        this.weeks = [singular, plural];
        return this;
    }
    setMonths(v) {
        const [singular, plural] = v;
        this.months = [singular, plural];
        return this;
    }
    setYears(v) {
        const [singular, plural] = v;
        this.years = [singular, plural];
        return this;
    }
    setLustrums(v) {
        const [singular, plural] = v;
        this.lustrums = [singular, plural];
        return this;
    }
    setDecades(v) {
        const [singular, plural] = v;
        this.decades = [singular, plural];
        return this;
    }
}
exports.LanguageCreatorBuilder = LanguageCreatorBuilder;
