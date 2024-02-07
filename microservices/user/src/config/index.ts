import dotenv from "dotenv";

// if (process.env.NODE_ENV !== "prod") {
//
// } else {
//
// }

dotenv.config();

/* ------- PORTS ------- */
export const PORT = process.env.PORT;

/* ------- DATABASE ------- */
export const DATABASE_URL = process.env.DATABASE_URL || "";

export const POSTGRES_URL = process.env.POSTGRES_URL || "";
export const POSTGRES_USER = process.env.POSTGRES_USER || "";
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "";
export const POSTGRES_NAME = process.env.POSTGRES_NAME || "";
