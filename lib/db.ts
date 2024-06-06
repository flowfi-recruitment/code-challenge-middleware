import postgres from "postgres";

const db = postgres(process.env.connection); // will use psql environment variables

export default db;
