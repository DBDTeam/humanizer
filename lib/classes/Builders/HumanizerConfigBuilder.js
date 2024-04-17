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
        return this;
    }
    setEnableComma(condition = true) {
        this.enable_comma = condition;
        return this;
    }
    setLatestSeparator(latest_separator) {
        this.latest_separator = latest_separator;
        return this;
    }
    setLanguage(lang) {
        this.language = lang;
        return this;
    }
    setMaxDecimals(v) {
        this.max_decimal = v;
        return this;
    }
    setDecimal(condition = true) {
        this.decimal = condition;
        return this;
    }
    setMaxUnits(v) {
        this.max_units = v;
        return this;
    }
    setPostSpacer(v) {
        this.post_spacer = v;
        return this;
    }
    setPreSpacer(v) {
        this.pre_spacer = v;
        return this;
    }
}
exports.HumanizerConfigBuilder = HumanizerConfigBuilder;
