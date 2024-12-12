import { Client } from "https://deno.land/x/postgres@v0.14.0/mod.ts";

// Set up PostgreSQL client connection
const client = new Client({
  user: "postgres",
  database: "postgres",
  hostname: "db",
  password: "Secret1234!",
  port: 5432,
});

await client.connect();

export default client;
