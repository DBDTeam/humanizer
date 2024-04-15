export class ConfigError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "[HumanizerConfigError]";
    }
};

export class HumanizerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "[HumanizerError]";
    }
};