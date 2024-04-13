import { HumanizerClient } from "./src/classes/Humanizer";

export * from "./src/classes/Humanizer";

const client = new HumanizerClient({
  default_format: {
    seconds: true,
    minutes: true,
    weeks: true,
    hours: true,
    days: true
  },
  latest_concatenator: " y ",
  enable_comma: true,
  language: "es"
});

console.log(client.humanizeDate(new Date(Date.now() + 1000 * 63 * 62 * 26 * 7)));