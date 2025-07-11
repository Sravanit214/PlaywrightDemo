import {test} from '../../Fixtures/customFixture'

// test("test1 Fixture",async({fixture1})=>{
//     console.log(`Use Statement Execution : ${fixture1}`)
// })

// test("test2 Fixture",async({fixture1})=>{
//     console.log(`Use Statement Execution : ${fixture1}`)
// })

test("test1 Worker Fixture",async({fixture1, workerfixture})=>{
    console.log(`Use Statement Execution : ${fixture1}`)
    console.log(`Use Statement Execution : ${workerfixture}`)
})

test("test2 Worker Fixture",async({fixture1})=>{
    console.log(`Use Statement Execution : ${fixture1}`)
})