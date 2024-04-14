import { HumanizerConfig } from "../typings/interfaces/Humanizer";
import { BaseHumanizer } from "./BaseHumanizer";
export declare class HumanizerClient extends BaseHumanizer {
    constructor(config: HumanizerConfig);
    humanizeMilliseconds(milliseconds: number, option?: Record<any, any>): string;
    humanizeStamps(stamp1: number, stamp2?: number, option?: Record<any, any>): string;
    humanizeDate(date1: Date, date2?: Date, option?: Record<any, any>): string;
    private edit_time;
    private concatenate;
}
