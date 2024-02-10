import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, text } from "drizzle-orm/pg-core";

export const customers = pgTable("customers", {
  id: uuid("id").primaryKey().notNull(),
  stripeCustomerId: text("stripe_customer_id")
});

export type Customer = InferSelectModel<typeof customers>;
export type NewCustomer = InferInsertModel<typeof customers>;
