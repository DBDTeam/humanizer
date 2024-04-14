/* -------------- Enumerators -------------- */
// -> None
/* ------------------ End ------------------ */

//////////////////////////////////////////////

/* -------------- Interfaces --------------- */
/** Represents a language creator. */
export interface LanguageCreator {
    years?:           string[];
    decades?:         string[];
    lustrums?:        string[];
    months?:          string[];
    weeks?:           string[];
    days?:            string[];
    hours?:           string[];
    minutes?:         string[];
    seconds?:         string[];
    milliseconds?:    string[];
};

/** Allow/disallow unit object. */
export interface Formats {
    /** If milliseconds is enabled to use when humanizing. */
    milliseconds?: boolean;
    /** If seconds is enabled to use when humanizing. */
    seconds?:      boolean;
    /** If minutes is enabled to use when humanizing. */
    minutes?:      boolean;
    /** If hours is enabled to use when humanizing. */
    hours?:        boolean;
    /** If days is enabled to use when humanizing. */
    days?:         boolean;
    /** If weeks is enabled to use when humanizing. */
    weeks?:        boolean;
    /** If months is enabled to use when humanizing. */
    months?:       boolean;
    /** If years is enabled to use when humanizing. */
    years?:        boolean;
    /** If lustrums are enabled to use when humanizing. */
    lustrums?:     boolean;
    /** If decades are enabled to use when humanizing. */
    decades?:      boolean;
};

/** Represents all allowed Humanizer constructor options. */
export interface HumanizerConfig {
    /**
    * The default format of how to display the content.
    */
    default_format: Formats;
    /**
    * When you want to enable the comma in the latest value, e.g:
    * @example
    * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes, 3.87 seconds.
    */
    enable_comma?: boolean;
    /**
    * This means when you want to add a latest separator in the humanized time, e.g:
    * @example
    * 3 hours, 17 minutes, 3 seconds => 3 hours, 17 minutes (concatenator) and 3 seconds.
    */
    latest_separator?: string;
    /**
    * The language that will be humanizated the time.
    * @example
    * 3 hours, 17 minutes, 3 seconds => 3 horas, 17 minutos, 3 segundos
    */
    language?: Languages;
    /**
    * Represents the maximum number of decimal places the last number can have.
    * @example
    * 3 hours, 17 minutes, 3.125 seconds => (in the case of max_decimal = 2) 3 hours, 17 minutes, 3.12 seconds.
    */
    max_decimal?: number;
    /**
    * Represents the replacement for the comma with another character of your choice.
    * @example
    * 3 hours, 17 minutes, 3.125 seconds => (in the case of decimal=",") 3 hours, 17 minutes, 3,125 seconds
    */
    decimal?: string;
    /**
    * Represents the maximum number of units the text can have when humanizing.
    * @example
    * 3 hours, 17 minutes, 3 seconds => (in the case of max_units = 2) 3 hours, 17 minutes.
    */
    max_units?: number;
};
/* ------------------ End ------------------ */

//////////////////////////////////////////////

/* ----------------- Types ----------------- */
/** Represents the languages supported by the humanizer. */
export type Languages =
  | "es" // Español
  | "en" // Inglés
  | "pt" // Portugués
  | "fr" // Francés
  | "it" // Italiano
  | "zh" // Chino
  | "sv" // Sueco
  | "de" // Alemán
  | "ru" // Ruso
  | "nl" // Holandés
  | "ko" // Coreano
  | "ja" // Japonés
  | "ar" // Árabe
  | "hi" // Hindi
  | "fa" // Persa
  | "ta" // Tamil
  | "te" // Telugu
  | "bn" // Bengalí
  | "gu"; // Gujarati

/** Ensures type of T. */
export type Ensure<T> = Exclude<T, null | undefined>;

/** Ensures all properties in a object. */
export type EnsureAll<T> = {
    [P in keyof T]-?: Ensure<T[P]>;
};

/** Represents all valid language units. */
export type LanguageUnits = EnsureAll<LanguageCreator>;
/* ------------------ End ------------------ */

//////////////////////////////////////////////