import { HumanizerConfig } from "../typings/interfaces/Humanizer";

export class HumanizerClient {
    config: HumanizerConfig;
    constructor(config: HumanizerConfig) {
        this.config = config
    }
}