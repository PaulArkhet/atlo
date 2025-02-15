import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { subscriptionRouter } from "./routes/subscriptions";
import { cors } from "hono/cors";
import { registrationRouter } from "./routes/registrations";
import { bookingRouter } from "./routes/bookings";
import { blogRouter } from "./routes/blogs";
import { usersRouter } from "./routes/users";
import { userRouter } from "./routes/user";

const app = new Hono();

app.use("*", logger());
app.use("*", cors());

const apiRoutes = app
  .basePath("/api/v0")
  .route("/subscriptions", subscriptionRouter)
  .route("/registrations", registrationRouter)
  .route("/bookings", bookingRouter)
  .route("/blogs", blogRouter)
  .route("/users", usersRouter)
  .route("/user", userRouter);

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
