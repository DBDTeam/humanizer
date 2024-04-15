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
    setDefaultFormat(config: Formats): void;
    setEnableComma(condition?: boolean): void;
    setLatestSeparator(latest_separator: string): void;
    setLanguage(lang: Languages): void;
    setMaxDecimals(v: number): void;
    setDecimal(condition?: boolean): void;
    setMaxUnits(v: number): void;
    setPostSpacer(v: string): void;
    setPreSpacer(v: string): void;
}
