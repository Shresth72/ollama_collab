import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {date, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    salt: text('salt').notNull(),
    created_at: date('created_at').notNull().default('now()'),
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

