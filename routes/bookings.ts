import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createInsertSchema } from "drizzle-zod";
import { bookings as bookingsTable } from "../schemas/bookings";
import { mightFail } from "might-fail";
import { db } from "../db";
import { HTTPException } from "hono/http-exception";

export const bookingRouter = new Hono()
  .get(async (c) => {
    const { error: bookingsQueryError, result: bookingsQueryResult } =
      await mightFail(db.select().from(bookingsTable));

    if (bookingsQueryError) {
      throw new HTTPException(500, {
        message: "Error while fetching bookings",
        cause: bookingsQueryError,
      });
    }

    return c.json({ bookings: bookingsQueryResult }, 200);
  })
  .post(
    "/",
    zValidator(
      "json",
      createInsertSchema(bookingsTable).omit({
        bookingId: true,
        createdAt: true,
      })
    ),
    async (c) => {
      const insertValues = c.req.valid("json");
      const { error: bookingInsertError, result: bookingInsertResult } =
        await mightFail(
          db
            .insert(bookingsTable)
            .values({ ...insertValues })
            .returning()
        );

      if (bookingInsertError) {
        console.log("Error while creating booking");
        throw new HTTPException(500, {
          message: "Error while creating booking",
          cause: bookingInsertResult,
        });
      }

      return c.json({ booking: bookingInsertResult[0] }, 200);
    }
  );
