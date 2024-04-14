import { Languages } from "../enums/Languages";
export declare interface Formats {
    milliseconds?: boolean;
    seconds?: boolean;
    minutes?: boolean;
    hours?: boolean;
    days?: boolean;
    weeks?: boolean;
    months?: boolean;
    years?: boolean;
    lustrums?: boolean;
    decades?: boolean;
}
export interface HumanizerConfig {
    /**
     * The default format of how to display the content.
     */
    default_format: Formats;
    /**
     * When you want to enable the comma in the latest value, e.g:
     * @example
     * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes, 3.87 seconds.
     */
    enable_comma?: boolean;
    /**
     * This means when you want to add a latest separator in the humanized time, e.g:
     * @example
     * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes (concatenator) and 3 seconds.
     */
    latest_separator?: string;
    /**
     * The language that will be humanizated the time.
     * @example
     * 3 hours, 17 minutes, 3 seconds => 3 horas, 17 minutos, 3 segundos
     */
    language?: Languages;
    max_decimal?: number;
    decimal?: string;
    max_units?: number;
}
