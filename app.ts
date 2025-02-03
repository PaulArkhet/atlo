import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { subscriptionRouter } from "./routes/subscriptions";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app
  .basePath("/api/v0")
  .route("/subscriptions", subscriptionRouter);

app.use("/*", serveStatic({ root: "./frontend/dist" }));
app.get("/*", async (c) => {
  try {
    const indexHtml = await Bun.file("./frontend/dist/index.html").text();
    return c.html(indexHtml);
  } catch (error) {
    console.error("Error reading index.html:", error);
    return c.text("Internal Server Error", 500);
  }
});

export type ApiRoutes = typeof apiRoutes;
export default app;
