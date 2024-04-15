import { HumanizerConfigBuilder } from "./builders/HumanizerConfigBuilder";
import { LanguageCreatorBuilder } from "./builders/LanguageCreatorBuilder";
import { HumanizerClient } from "./classes/HumanizerClient";
import { HumanizerConfig } from "@types";
/** The default config for these that are learning to use the humanizer. */
declare const DefaultConfig: HumanizerConfig;
export { DefaultConfig, HumanizerClient, HumanizerConfigBuilder, LanguageCreatorBuilder };
declare const _default: {
    DefaultConfig: HumanizerConfig;
    HumanizerClient: typeof HumanizerClient;
    HumanizerConfigBuilder: typeof HumanizerConfigBuilder;
    LanguageCreatorBuilder: typeof LanguageCreatorBuilder;
};
export default _default;
