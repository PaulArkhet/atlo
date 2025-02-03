import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createInsertSchema } from "drizzle-zod";
import { registrations as registrationsTable } from "../schemas/registrations";
import { mightFail } from "might-fail";
import { db } from "../db";
import { HTTPException } from "hono/http-exception";

export const registrationRouter = new Hono()
  .get(async (c) => {
    const { error: registrationsQueryError, result: registrationsQueryResult } =
      await mightFail(db.select().from(registrationsTable));

    if (registrationsQueryError) {
      throw new HTTPException(500, {
        message: "Error while fetching registrations",
        cause: registrationsQueryError,
      });
    }

    return c.json({ registrations: registrationsQueryResult }, 200);
  })
  .post(
    "/",
    zValidator(
      "json",
      createInsertSchema(registrationsTable).omit({
        registrationId: true,
        createdAt: true,
      })
    ),
    async (c) => {
      const insertValues = c.req.valid("json");
      const {
        error: registrationInsertError,
        result: registrationInsertResult,
      } = await mightFail(
        db
          .insert(registrationsTable)
          .values({ ...insertValues })
          .returning()
      );

      if (registrationInsertError) {
        console.log("Error while creating registration");
        throw new HTTPException(500, {
          message: "Error while creating registration",
          cause: registrationInsertResult,
        });
      }

      return c.json({ registration: registrationInsertResult[0] }, 200);
    }
  );
