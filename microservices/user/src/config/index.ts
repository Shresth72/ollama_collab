import dotenv from "dotenv";

// if (process.env.NODE_ENV !== "prod") {
//
// } else {
//
// }

dotenv.config();

/* ------- PORTS ------- */
export const PORT = process.env.PORT;

/* ------- SUPABASE ------- */
export const DATABASE_URL = process.env.DATABASE_URL || "";

/* ------- POSTGRES ------- */
export const POSTGRES_URL = process.env.POSTGRES_URL || "";
