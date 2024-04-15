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
    }
    setSeconds(v) {
        const [singular, plural] = v;
        this.seconds = [singular, plural];
    }
    setMinutes(v) {
        const [singular, plural] = v;
        this.minutes = [singular, plural];
    }
    setHours(v) {
        const [singular, plural] = v;
        this.hours = [singular, plural];
    }
    setDays(v) {
        const [singular, plural] = v;
        this.days = [singular, plural];
    }
    setWeeks(v) {
        const [singular, plural] = v;
        this.weeks = [singular, plural];
    }
    setMonths(v) {
        const [singular, plural] = v;
        this.months = [singular, plural];
    }
    setYears(v) {
        const [singular, plural] = v;
        this.years = [singular, plural];
    }
    setLustrums(v) {
        const [singular, plural] = v;
        this.lustrums = [singular, plural];
    }
    setDecades(v) {
        const [singular, plural] = v;
        this.decades = [singular, plural];
    }
}
exports.LanguageCreatorBuilder = LanguageCreatorBuilder;
