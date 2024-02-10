import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { users } from "./users";

export const collaborators = pgTable("collaborators", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  // TODO: Add foreign key to workspace_id
  workspaceId: uuid("workspace_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .default(sql`now()`)
    .notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
});

export type Collaborator = InferSelectModel<typeof collaborators>;
export type NewCollaborator = InferInsertModel<typeof collaborators>;
