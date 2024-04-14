import { Languages } from "@types";
/**
 * All supported time units.
 */
export declare const Units: string[];
/**
 * Time conversion factors.
 */
export declare const Factors: Record<string, number>;
/**
 * Language code map.
 */
export declare const Langs: Map<Languages, import("@types").EnsureAll<import("@types").LanguageCreator>>;
/**
 * This can be infinitely improved by getting a language list
 * and fetching every translated word and adding it to the map.
 */ 
