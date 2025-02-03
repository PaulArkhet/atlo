import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createInsertSchema } from "drizzle-zod";
import { subscriptions as subscriptionsTable } from "../schemas/subscriptions";
import { mightFail } from "might-fail";
import { db } from "../db";
import { HTTPException } from "hono/http-exception";

export const subscriptionRouter = new Hono()
  .get(async (c) => {
    const { error: subscriptionsQueryError, result: subscriptionsQueryResult } =
      await mightFail(db.select().from(subscriptionsTable));

    if (subscriptionsQueryError) {
      throw new HTTPException(500, {
        message: "Error while fetching subscriptions",
        cause: subscriptionsQueryError,
      });
    }

    return c.json({ subscriptions: subscriptionsQueryResult }, 200);
  })
  .post(
    "/",
    zValidator(
      "json",
      createInsertSchema(subscriptionsTable).omit({
        subscriptionId: true,
        createdAt: true,
      })
    ),
    async (c) => {
      const insertValues = c.req.valid("json");
      const {
        error: subscriptionInsertError,
        result: subscriptionInsertResult,
      } = await mightFail(
        db
          .insert(subscriptionsTable)
          .values({ ...insertValues })
          .returning()
      );

      if (subscriptionInsertError) {
        console.log("Error while creating subscription");
        throw new HTTPException(500, {
          message: "Error while creating subscription",
          cause: subscriptionInsertResult,
        });
      }

      return c.json({ subscription: subscriptionInsertResult[0] }, 200);
    }
  );
