import { HumanizerConfigBuilder } from "./builders/HumanizerConfigBuilder";
import { LanguageCreatorBuilder } from "./builders/LanguageCreatorBuilder";
import { HumanizerClient } from "./classes/HumanizerClient";
import { HumanizerConfig } from "@types";

/** The default config for these that are learning to use the humanizer. */
const DefaultConfig: HumanizerConfig = {
  default_format: {
    milliseconds: true,
    seconds: true,
    minutes: true,
    hours: true,
    days: true,
    weeks: true,
    months: true,
    years: true,
    lustrums: true,
    decades: true
  },
  enable_comma: false,
  language: "en",
  latest_separator: "and",
};

export { DefaultConfig, HumanizerClient, HumanizerConfigBuilder, LanguageCreatorBuilder }
export default { DefaultConfig, HumanizerClient, HumanizerConfigBuilder, LanguageCreatorBuilder }