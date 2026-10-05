import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

// Global singleton cache for Next.js Fast Refresh / HMR in development
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

// Disable prepared statements (prepare: false) for compatibility with transaction poolers (Supavisor port 6543)
const conn =
  globalForDb.conn ??
  postgres(connectionString || "postgresql://dummy:dummy@localhost:5432/postgres", {
    prepare: false,
    max: process.env.NODE_ENV === "production" ? 10 : 1,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.conn = conn;
}

export const db = drizzle({ client: conn, schema });
export { schema };
export * from "./schema";
