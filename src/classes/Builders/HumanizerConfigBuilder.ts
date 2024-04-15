import { Languages } from "../../typings/enums/Languages";
import { Formats } from "../../typings/interfaces/Humanizer"

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
        this.default_format = config
    }

    setEnableComma(condition: boolean = true) {
        this.enable_comma = condition
    }

    setLatestSeparator(latest_separator: string) {
        this.latest_separator = latest_separator
    }

    setLanguage(lang: Languages) {
        this.language = lang
    }

    setMaxDecimals(v: number) {
        this.max_decimal = v
    }

    setDecimal(condition: boolean = true) {
        this.decimal = condition
    }

    setMaxUnits(v: number) {
        this.max_units = v
    }

    setPostSpacer(v: string) {
        this.post_spacer = v
    }

    setPreSpacer(v: string) {
        this.pre_spacer = v
    }
}