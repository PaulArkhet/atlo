import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { blogs as blogsTable } from "../schemas/blogs";
import { mightFail, mightFailSync } from "might-fail";
import { db } from "../db";
import { HTTPException } from "hono/http-exception";
import { eq } from "drizzle-orm";
import { z } from "zod";

export function assertIsParsableInt(id: string): number {
  const { result: parsedId, error: parseIdError } = mightFailSync(() =>
    z.coerce.number().int().parse(id)
  );

  if (parseIdError) {
    throw new HTTPException(400, {
      message: `Id ${id} cannot be parsed into a number.`,
      cause: parseIdError,
    });
  }

  return parsedId;
}

export const blogRouter = new Hono()
  .get("/", async (c) => {
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
  .get("/:blogId", async (c) => {
    const { blogId: blogIdString } = c.req.param();
    const blogId = assertIsParsableInt(blogIdString);
    const { result: blogQueryResult, error: blogQueryError } = await mightFail(
      db.select().from(blogsTable).where(eq(blogsTable.blogId, blogId))
    );
    if (blogQueryError) {
      throw new HTTPException(500, {
        message: "Error occurred when fetching blogs.",
        cause: blogQueryError,
      });
    }
    return c.json({ blog: blogQueryResult[0] });
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
      if (insertValues.main === true) {
        const { error: queryError } = await mightFail(
          db.update(blogsTable).set({ main: false })
        );
        if (queryError) {
          console.error("Error while updating main blog status:", queryError);
          throw new HTTPException(500, {
            message: "Failed to update main blog status",
            cause: queryError,
          });
        }
      }
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
  )
  .post("/:blogId/delete", async (c) => {
    const { blogId: blogIdString } = c.req.param();
    const blogId = assertIsParsableInt(blogIdString);

    const { error: deleteBlogError } = await mightFail(
      db.delete(blogsTable).where(eq(blogsTable.blogId, blogId))
    );

    if (deleteBlogError) {
      throw new HTTPException(500, {
        message: "Error when deleting blog.",
        cause: deleteBlogError,
      });
    }

    return c.json({}, 200);
  })
  .post(
    "/:blogId/update",
    zValidator(
      "json",
      createUpdateSchema(blogsTable).omit({
        createdAt: true,
      })
    ),
    async (c) => {
      const { blogId: blogIdString } = c.req.param();
      const blogId = assertIsParsableInt(blogIdString);
      const updateValues = c.req.valid("json");
      if (updateValues.main === true) {
        const { error: queryError } = await mightFail(
          db.update(blogsTable).set({ main: false })
        );
        if (queryError) {
          console.error("Error while updating main blog status:", queryError);
          throw new HTTPException(500, {
            message: "Failed to update main blog status",
            cause: queryError,
          });
        }
      }
      const { error: queryError, result: newBlogResult } = await mightFail(
        db
          .update(blogsTable)
          .set({ ...updateValues })
          .where(eq(blogsTable.blogId, blogId))
          .returning()
      );

      if (queryError) {
        throw new HTTPException(500, {
          message: "Error updating blogs table",
          cause: queryError,
        });
      }

      return c.json({ newBlog: newBlogResult[0] }, 200);
    }
  );
