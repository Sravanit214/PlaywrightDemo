import {test as basetest, WorkerFixture} from '@playwright/test'

type fixture1 = {
    fixture1:string
 }

 type worker = {
    workerfixture : any
 }

 export const test =basetest.extend<fixture1, worker>({
    fixture1:async({},use)=>{
        const fixture1="Playwright Learning"
        console.log("Before executing use statement fixture1")
        await use(fixture1)
        console.log("After executing use statement fixture1")
    },
    workerfixture :[async({},use)=>{
        const workerfixture="Worker Fixture"
        console.log("Before executing use statement Worker Fixture")
        await use(workerfixture)
        console.log("After executing use statement Worker Fixture") 

    }, {scope: "worker"}]
 })