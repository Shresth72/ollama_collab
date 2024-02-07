CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"salt" text NOT NULL,
	"created_at" date DEFAULT 'now()' NOT NULL
);
