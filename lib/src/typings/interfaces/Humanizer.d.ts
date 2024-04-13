import { Languages } from "../enums/Languages";
export declare interface Formats {
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
     * This means when you want to add a latest concatenator in the humanized time, e.g:
     * @example
     * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes (concatenator) and 3 seconds.
     */
    latest_concatenator?: string;
    language?: Languages;
}
