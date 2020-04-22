import {pg} from '../lib/index'

beforeAll(()=>{
  return new Promise((y,n)=>{
    let sql = ``
  })
})

test('test pg.query',async ()=>{
  expect.assertions(1);
  const res = await pg.query('SELECT $1::text as name', ['xx'])
  expect(res.rows[0]).toEqual({ name: 'xx' })
})

test('测试 pg.transact 成功',async ()=>{

})

test('测试 pg.transact 失败',async ()=>{
  
})

afterAll(()=>{
  pg.end()
})