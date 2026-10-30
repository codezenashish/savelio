import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const postgresConnectionString = process.env.DATABASE_URL || "";

if (!postgresConnectionString) {
  console.error(
    "Missing DATABASE_URL environment variable. Please set it in Vercel Project Settings -> Environment Variables."
  );
}

// Cache the database connection in development to prevent connection exhaustion
const globalDatabaseConnectionStore = globalThis as unknown as {
  cachedConnection: postgres.Sql | undefined;
};

const postgresClientInstance =
  globalDatabaseConnectionStore.cachedConnection ??
  postgres(postgresConnectionString, {
    prepare: false, // Recommended for Supabase connection pooler (port 6543)
    ssl: "require",
    max: process.env.NODE_ENV === "production" ? 2 : 10,
    idle_timeout: 20,
    max_lifetime: 60 * 30,
    connect_timeout: 15,
  });

globalDatabaseConnectionStore.cachedConnection = postgresClientInstance;

export const db = drizzle(postgresClientInstance, { schema });
