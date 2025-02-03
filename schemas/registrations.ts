import {
  pgTable,
  varchar,
  boolean,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import type { InferSelectModel } from "drizzle-orm";

export const registrations = pgTable("registrations", {
  registrationId: serial("registration_id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Registration = InferSelectModel<typeof registrations>;
