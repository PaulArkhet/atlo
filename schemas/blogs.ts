import { pgTable, varchar, serial, timestamp } from "drizzle-orm/pg-core";
import type { InferSelectModel } from "drizzle-orm";

export const blogs = pgTable("blogs", {
  blogId: serial("blog_id").primaryKey(),
  content: varchar("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Blog = InferSelectModel<typeof blogs>;
