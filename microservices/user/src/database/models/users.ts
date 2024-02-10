import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import {
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  username: text("username").notNull(),
  avatar: text("avatar")
    .notNull()
    .default(
      "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar.png"
    ),
  email: text("email").notNull(),
  password: text("password").notNull(),
  salt: text("salt").notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true, mode: "string" }),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
  paymentMethod: jsonb("payment_method")
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
