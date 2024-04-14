import { HumanizerConfig } from "../typings/interfaces/Humanizer";
export declare const DefaultConfig: HumanizerConfig;
export declare class BaseHumanizer {
    config: HumanizerConfig;
    readonly units: string[];
    readonly valid_languages: string[];
    constructor(config: HumanizerConfig);
    private check_config;
}
