const { HumanizerClient } = require("../lib/classes/HumanizerClient");

const client = new HumanizerClient({
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
    language: "es",
    enable_comma: true,
    latest_separator: "y",
    max_decimal: 2,
    decimal: ".",
});

const tiempo = 1000 * 60 * 24 + 502 + 787 + 41415 + 54456 + 45465879789465;
console.log(client.humanizeMilliseconds(tiempo));

const tiempostamp = Date.now() + (1000 * 60 * 24 + 502 + 787 + 41415 + 54456 + 45465879789465);
console.log(client.humanizeStamps(tiempostamp));

const tiempodate = new Date(Date.now() + (1000 * 60 * 24 + 502 + 787 + 41415 + 54456 + 45465879789465));
console.log(client.humanizeDate(tiempodate));