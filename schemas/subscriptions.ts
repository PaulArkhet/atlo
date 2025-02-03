import {
  pgTable,
  varchar,
  boolean,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import type { InferSelectModel } from "drizzle-orm";

export const subscriptions = pgTable("subcriptions", {
  subscriptionId: serial("subscription_id").primaryKey(),
  email: varchar("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Subscription = InferSelectModel<typeof subscriptions>;
