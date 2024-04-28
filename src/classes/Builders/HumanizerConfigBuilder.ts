import { Formats, Languages } from "@types";

export class HumanizerConfigBuilder {
    default_format?: Formats;
    enable_comma?: boolean;
    latest_separator?: string;
    language?: Languages;
    max_decimal?: number;
    decimal?: boolean;
    max_units?: number;
    post_spacer?: string;
    pre_spacer?: string;
    constructor() {
        this.default_format = undefined;
        this.enable_comma = undefined;
        this.latest_separator = undefined;
        this.language = undefined;
        this.max_decimal = undefined;
        this.decimal = undefined;
        this.max_units = undefined;
        this.post_spacer = undefined;
        this.pre_spacer = undefined;
    }

    setDefaultFormat(config: Formats) {
        this.default_format = config;
        return this;
    }

    setEnableComma(condition: boolean = true) {
        this.enable_comma = condition;
        return this;
    }

    setLatestSeparator(latest_separator: string) {
        this.latest_separator = latest_separator;
        return this;
    }

    setLanguage(lang: Languages) {
        this.language = lang;
        return this;
    }

    setMaxDecimals(v: number) {
        this.max_decimal = v;
        return this;
    }

    setDecimal(condition: boolean = true) {
        this.decimal = condition;
        return this;
    }

    setMaxUnits(v: number) {
        this.max_units = v;
        return this;
    }

    setPostSpacer(v: string) {
        this.post_spacer = v;
        return this;
    }

    setPreSpacer(v: string) {
        this.pre_spacer = v;
        return this;
    }
}