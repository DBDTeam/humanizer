import { HumanizerConfig } from "../typings/interfaces/Humanizer";
export declare const DefaultConfig: HumanizerConfig;
export declare class HumanizerClient {
    config: Record<any, any>;
    constructor(config: HumanizerConfig);
    humanizeDate(date1: Date, date2?: Date, option?: Record<any, any>): string;
    private humanize;
}
