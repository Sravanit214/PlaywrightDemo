function task1 (callback) {

    setTimeout(()=>{
    
        console.log ('1.step 1')
    
        callback()
    
    },2000)
    
    }
    
    
    function task2 (callback) {
    
        setTimeout(()=>{
    
        console.log ('2.step 2')
    
        callback()
    
    },1000);
    
    }
    
    
    function task3 (callback) {
    
        setTimeout(()=>{
    
        console.log ('3.step 3')
    
        callback()

    },3000);
    
    }
    
    
    function task4 (callback) {

        setTimeout(()=>{
    
        console.log ('4.step 4')

        callback()
    
    },1500);
    
    }
    
    
    function task5 (callback) {
    
        setTimeout(()=>{
    
        console.log ('5.step 5')
    
        callback()
    
    },2500);
    
    }
    
    
    task1(()=>{

        task2(()=>{
    
            task3(()=>{
    
                task4(()=>{
    
                    task5(()=>{
    
    
                     })
    
               })
    
            })
    
       })
    
    })
    
