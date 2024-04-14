# @dbdteam/humanizator
## Getting Started with the Dependency
Humanizator is an essential tool for any developer looking to improve the **readability and comprehension** of time data in their applications. It converts time units into a **human-friendly format**, making the interpretation of __dates and durations__ easier for users of all kinds. Whether you're building a scheduling application, a social media platform, or a project management system, Humanizator ensures that time data is presented in a clear and understandable way, thereby enhancing user experience and the usability of your application.

## Example of Client Initialization

```js
const { HumanizerClient, DefaultConfig } = require("@dbdteam/humanizator")

const client = new HumanizerClient(DefaultConfig)

// This is 24 minutes.
const times = [
    1000 * 60 * 24,
    Date.now() + 1000 * 60 * 24,
    new Date(Date.now() + 1000 * 60 * 24)
    ]

const results = [
    client.humanizeMilliseconds(times[0]),
    client.humanizeStamps(times[1]),
    client.humanizeDates(times[2])
    ]

console.log(...results)
```
In future versions, we'll add documentation for easier usage!

@DBDTeam - 2024