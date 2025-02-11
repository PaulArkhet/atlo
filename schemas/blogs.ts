import {
  pgTable,
  varchar,
  serial,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import type { InferSelectModel } from "drizzle-orm";

export const blogs = pgTable("blogs", {
  blogId: serial("blog_id").primaryKey(),
  content: varchar("content").notNull(),
  thumbnail: varchar("thumbnail"),
  summary: varchar("summary"),
  main: boolean("main"),
  featured: boolean("featured"),
  editedAt: timestamp("edited_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Blog = InferSelectModel<typeof blogs>;
