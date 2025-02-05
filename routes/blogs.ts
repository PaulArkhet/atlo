import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createInsertSchema } from "drizzle-zod";
import { blogs as blogsTable } from "../schemas/blogs";
import { mightFail } from "might-fail";
import { db } from "../db";
import { HTTPException } from "hono/http-exception";

export const blogRouter = new Hono()
  .get(async (c) => {
    const { error: blogsQueryError, result: blogsQueryResult } =
      await mightFail(db.select().from(blogsTable));

    if (blogsQueryError) {
      throw new HTTPException(500, {
        message: "Error while fetching blogs",
        cause: blogsQueryError,
      });
    }

    return c.json({ blogs: blogsQueryResult }, 200);
  })
  .post(
    "/",
    zValidator(
      "json",
      createInsertSchema(blogsTable).omit({
        blogId: true,
        createdAt: true,
      })
    ),
    async (c) => {
      const insertValues = c.req.valid("json");
      const { error: blogInsertError, result: blogInsertResult } =
        await mightFail(
          db
            .insert(blogsTable)
            .values({ ...insertValues })
            .returning()
        );

      if (blogInsertError) {
        console.log("Error while creating blog");
        throw new HTTPException(500, {
          message: "Error while creating blog",
          cause: blogInsertResult,
        });
      }
      return c.json({ blog: blogInsertResult[0] }, 200);
    }
  );
