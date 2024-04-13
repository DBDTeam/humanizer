import { HumanizerClient } from "./src/classes/Humanizer";

export * from "./src/classes/Humanizer";

const client = new HumanizerClient({
  default_format: {
    seconds: true,
    minutes: true,
    hours: true,
    days: true,
    weeks: true,
    months: true,
  },
  latest_concatenator: " y ",
  enable_comma: true,
  language: "es"
});

console.log(client.humanizeDate(new Date(Date.now() + 1000 * 60 * 70 * 80), undefined, {
  months: ["MeSES", "mesESS"],
  weeks: ["SEmANa", "seMANAS"],
  days: ["DíAAA", "díASSS"],
  hours: ["HorÁ", "HORasss"],
  minutes: ["MINUtOOO", "minutoSSSSSSSSS"],
  seconds: ["sEGUNDooo", "SEGunDOOS"]
}));