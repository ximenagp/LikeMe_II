
import 'dotenv/config'
import pg from 'pg'
//indica los datos para el acceso a la bd
const pool = new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DATABASE,
    allowExitOnIdle: true
    // connectionString: process.env.DATABASE_URL,
})

export default pool;