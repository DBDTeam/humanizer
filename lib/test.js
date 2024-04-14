"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HumanizerClient_1 = require("./src/classes/HumanizerClient");
//@ts-ignore
const client = new HumanizerClient_1.HumanizerClient({
    default_format: {
        seconds: true,
        minutes: true,
        milliseconds: true,
        hours: true,
        days: true,
        weeks: true,
        years: true,
        lustrums: true,
        decades: true
    },
    language: "es",
    enable_comma: true,
    latest_separator: " y ",
    max_decimal: 2,
    decimal: ".",
});
const tiempo = 1000 * 60 * 24 + 502 + 787 + 41415 + 54456 + 45465879789465;
console.log(client.humanizeMilliseconds(tiempo));
const tiempostamp = Date.now() + (1000 * 60 * 24 + 502 + 787 + 41415 + 54456 + 45465879789465);
console.log(client.humanizeStamps(tiempostamp));
const tiempodate = new Date(Date.now() + (1000 * 60 * 24 + 502 + 787 + 41415 + 54456 + 45465879789465));
console.log(client.humanizeDate(tiempodate));
