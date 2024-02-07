import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DATABASE_URL, POSTGRES_URL } from "../config";

const pool = new Pool({
  connectionString: POSTGRES_URL,
});

export const db = drizzle(pool);
