export declare type Formats = "weeks:days:hours:minutes:seconds" | "days:hours:minutes:seconds" | "hours:minutes:seconds" | "minutes:seconds" | "seconds";

export declare type Languages = "es" | "en" | "pt" | "fr"

export interface HumanizerConfig {
    /**
     * The default format of how to display the content.
     */
    default_format: Formats;
    /**
     * This means if you want to remove when some value is 0.
     * @example
     * 0 weeks, 0 days, 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes, 3 seconds
     */
    remove_zero_values: boolean;
    /**
     * When you want to enable the comma in the latest value, e.g:
     * @example
     * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes, 3.87 seconds.
     */
    enable_comma: boolean;
    /**
     * This means when you want to add a latest concatenator in the humanized time, e.g:
     * @example
     * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes (concatenator) and 3 seconds.
     */
    latest_concatenator: string
    language: Languages
}