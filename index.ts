import app from "./app";

Bun.serve({
  port: process.env.PORT || 3333,
  fetch: app.fetch,
});

const cron = require("cron");
const https = require("https");

const backendUrl = "https://atlo.onrender.com/";
const job = new cron.CronJob("*/14 * * * *", () => {
  console.log("restarting server");
  https.get(backendUrl, (res: any) => {
    if (res.statusCode === 200) {
      console.log("Server restarted");
    } else {
      console.log("failed to restart");
    }
  });
});

job.start();

console.log("Server running");
