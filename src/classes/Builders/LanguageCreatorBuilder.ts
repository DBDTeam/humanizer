export class LanguageCreatorBuilder {
    milliseconds?: string[];
    seconds?: string[];
    minutes?: string[];
    hours?: string[];
    days?: string[];
    weeks?: string[];
    months?: string[];
    years?: string[];
    lustrums?: string[];
    decades?: string[];
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

    setMilliseconds(v: string[]) {
        const [singular, plural] = v;
        
        this.milliseconds = [singular, plural];
        return this;
    }

    setSeconds(v: string[]) {
        const [singular, plural] = v;
        
        this.seconds = [singular, plural];
        return this;
    }

    setMinutes(v: string[]) {
        const [singular, plural] = v;
        
        this.minutes = [singular, plural];
        return this;
    }

    setHours(v: string[]) {
        const [singular, plural] = v;
        
        this.hours = [singular, plural];
        return this;
    }

    setDays(v: string[]) {
        const [singular, plural] = v;

        this.days = [singular, plural];
        return this;
    }

    setWeeks(v: string[]) {
        const [singular, plural] = v;

        this.weeks = [singular, plural];
        return this;
    }

    setMonths(v: string[]) {
        const [singular, plural] = v;

        this.months = [singular, plural];
        return this;
    }

    setYears(v: string[]) {
        const [singular, plural] = v;

        this.years = [singular, plural];
        return this;
    }

    setLustrums(v: string[]) {
        const [singular, plural] = v;

        this.lustrums = [singular, plural];
        return this;
    }

    setDecades(v: string[]) {
        const [singular, plural] = v;

        this.decades = [singular, plural];
        return this;
    }
}