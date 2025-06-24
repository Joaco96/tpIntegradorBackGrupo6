import mysql from 'mysql2/promise'
import env from '../config/env.js'

const { database } = env;

const connection = mysql.createPool({
  host: database.host,
  name: database.name,
  user: database.user,
  password: database.password,
})

export default connection;