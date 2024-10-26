module.exports = {
  dialect: "postgresql", // Ensure this key is correct
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://test_owner:psC8heEAiq1k@ep-shrill-king-a5r40pq3.us-east-2.aws.neon.tech/beat-cancer?sslmode=require",
  },
};
console.log("Database URL:", process.env.DATABASE_STRING);
