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
export const DB_HOST = process.env.DB_HOST || "";
export const DB_USER = process.env.DB_USER || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "";
