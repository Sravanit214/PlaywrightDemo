function booktable()// return is  promise
{
    return new Promise((resolve,reject)=>{
        console.log("book the table")
        setTimeout(()=>{
        const isbooked=true;//boolean
        if(isbooked)
        {
            resolve("bookedtable")//method
        }else
        {
        reject("no table available")//method of promise class
        }
    },2000)
})  
}
function orderfood()
{
    return new Promise((resolve,reject)=>{
        console.log("Order food")
        setTimeout(()=>{
        const isordered=true;
        if(isordered)
        {
            resolve("ordered food")
        }else
        {
        reject("no food")
        }
    },2000)
})
}
/*
booktable().then((table)=>{
    console.log(table)
    return orderfood()
}).then((ordered)=>
{
    console.log(ordered)
}).catch((error)=>{
    console.log(error)
}
).finally(()=>{
    console.log("*****completed*****")
}
)
*/
 
//Async and Await
async function hotelplan(){
    try{
    const booked= await booktable()
    console.log(booked)
    const ordered=await orderfood()
    console.log(ordered)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("completed")
    }
}
hotelplan()