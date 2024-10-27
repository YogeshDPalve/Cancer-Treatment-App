import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./Schema.jsx";

const sql = neon(
  "postgresql://test_owner:psC8heEAiq1k@ep-shrill-king-a5r40pq3.us-east-2.aws.neon.tech/beat-cancer?sslmode=require",
);
// console.log("Database URL:", process.env.DATABASE_STRING);

export const db = drizzle(sql, { schema });
