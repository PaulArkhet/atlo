import {
  pgTable,
  varchar,
  boolean,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import type { InferSelectModel } from "drizzle-orm";

export const bookings = pgTable("bookings", {
  bookingId: serial("booking_id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  company: varchar("company"),
  role: varchar("role"),
  info: varchar("info"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Booking = InferSelectModel<typeof bookings>;
