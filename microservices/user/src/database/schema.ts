import { users } from "./models/users";
import { collaborators } from "./models/collaborators";
import { customers } from "./models/customers";
import { pgEnum } from "drizzle-orm/pg-core";

export const action = pgEnum("action", [
  "ERROR",
  "TRUNCATE",
  "DELETE",
  "UPDATE",
  "INSERT"
]);

export const usersTable = users;
export const collaboratorsTable = collaborators;
export const customersTable = customers;
