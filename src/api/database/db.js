import mysql from "mysql2/promise";
import env from "../config/env.js";

const { database } = env;

const connection = mysql.createPool({
  host: database.host,
  user: database.user,
  password: database.password,
  port: database.port,
  database: database.name,
});

export default connection;
