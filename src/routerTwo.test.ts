import  request from "supertest";
import { afterAll, beforeAll, describe, test, expect } from '@jest/globals'

import { app } from './index'

const server = request(app)

// let server : any


// // const server = ()=> {app.listen(7777, ()=>{
// //     console.log('Test server is running on port 7777');
// // })}

// beforeAll(()=>{
//     server = app.listen(7777);
//     server()
// })

// afterAll(()=>{
//     server.close((err: any) => {
//         console.log('server closed')
//         process.exit(err ? 1 : 0)
//       })
// })

describe('routerOne', ()=>{
    test('/hello', async()=>{
        await server
        .get('/hello')
        .expect(200)
        // expect(res.body).toBe('Hi')
    })
})