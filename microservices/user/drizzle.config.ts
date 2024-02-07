import "dotenv/config";
import type { Config } from "drizzle-kit";
import { DATABASE_URL, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./src/config";

export default {
  schema: "./src/database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;
