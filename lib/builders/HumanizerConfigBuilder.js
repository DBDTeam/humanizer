"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanizerConfigBuilder = void 0;
class HumanizerConfigBuilder {
    constructor() {
        this.default_format = undefined;
        this.enable_comma = undefined;
        this.latest_separator = undefined;
        this.language = undefined;
        this.max_decimal = undefined;
        this.decimal = undefined;
        this.max_units = undefined;
        this.post_spacer = undefined;
        this.pre_spacer = undefined;
    }
    setDefaultFormat(config) {
        this.default_format = config;
    }
    setEnableComma(condition = true) {
        this.enable_comma = condition;
    }
    setLatestSeparator(latest_separator) {
        this.latest_separator = latest_separator;
    }
    setLanguage(lang) {
        this.language = lang;
    }
    setMaxDecimals(v) {
        this.max_decimal = v;
    }
    setDecimal(condition = true) {
        this.decimal = condition;
    }
    setMaxUnits(v) {
        this.max_units = v;
    }
    setPostSpacer(v) {
        this.post_spacer = v;
    }
    setPreSpacer(v) {
        this.pre_spacer = v;
    }
}
exports.HumanizerConfigBuilder = HumanizerConfigBuilder;
