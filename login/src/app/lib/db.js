import pkg from 'pg'
const {Pool} = pkg;
const pool = new Pool({
    host:"localhost",
    user:"postgres",
    password:"alpha333",
    database:"Users",
    port:5433
})
export default pool
