import "dotenv/config";
import type { Config } from "drizzle-kit";
import { SUPABASE_URL, POSTGRES_URL } from "./src/config";

export default {
  schema: "./src/database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: POSTGRES_URL
  }
} satisfies Config;
