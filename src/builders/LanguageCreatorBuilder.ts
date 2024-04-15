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
        const [singular, plural] = v

        this.milliseconds = [singular, plural]
    }

    setSeconds(v: string[]) {
        const [singular, plural] = v

        this.seconds = [singular, plural]
    }

    setMinutes(v: string[]) {
        const [singular, plural] = v

        this.minutes = [singular, plural]
    }

    setHours(v: string[]) {
        const [singular, plural] = v

        this.hours = [singular, plural]
    }

    setDays(v: string[]) {
        const [singular, plural] = v

        this.days = [singular, plural]
    }

    setWeeks(v: string[]) {
        const [singular, plural] = v

        this.weeks = [singular, plural]
    }

    setMonths(v: string[]) {
        const [singular, plural] = v

        this.months = [singular, plural]
    }

    setYears(v: string[]) {
        const [singular, plural] = v

        this.years = [singular, plural]
    }

    setLustrums(v: string[]) {
        const [singular, plural] = v

        this.lustrums = [singular, plural]
    }

    setDecades(v: string[]) {
        const [singular, plural] = v

        this.decades = [singular, plural]
    }
}