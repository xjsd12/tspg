const { Pool } = require('pg')
const pool = new Pool()

const end = ():any=>{
  return pool.end()
}

const query = (sql:string,params:Array<any>):any=>{
  return pool.query(sql,params)
}

const transact = async (cb:any):Promise<any>=>{
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    let res = await cb.call(null,client)
    await client.query('COMMIT')
    return res
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}

const pg = {
  query,
  transact,
  end
}

export {pg}