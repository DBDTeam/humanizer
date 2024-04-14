import { HumanizerConfig } from '@types';
export declare class BaseHumanizer {
    #private;
    /** All valid time units. */
    readonly units: readonly string[];
    /** All supported languages. */
    readonly valid_languages: string[];
    /** Humanizer configuration options. */
    config: HumanizerConfig;
    /**
     * Humanizer setup options.
     * @param {HumanizerConfig} options - Humanizer configuration options.
     */
    constructor(options: HumanizerConfig);
}
