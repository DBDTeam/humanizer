import { Formats, Languages } from "@types";
export declare class HumanizerConfigBuilder {
    default_format?: Formats;
    enable_comma?: boolean;
    latest_separator?: string;
    language?: Languages;
    max_decimal?: number;
    decimal?: boolean;
    max_units?: number;
    post_spacer?: string;
    pre_spacer?: string;
    constructor();
    setDefaultFormat(config: Formats): this;
    setEnableComma(condition?: boolean): this;
    setLatestSeparator(latest_separator: string): this;
    setLanguage(lang: Languages): this;
    setMaxDecimals(v: number): this;
    setDecimal(condition?: boolean): this;
    setMaxUnits(v: number): this;
    setPostSpacer(v: string): this;
    setPreSpacer(v: string): this;
}
