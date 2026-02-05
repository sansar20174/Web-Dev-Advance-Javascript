//const para=document.querySelectorAll("p")   
//para[0].textContent="This is the updated text for the first paragraph."
//para[1].textContent="This is the updated text for the second paragraph."
//console.log(para)

//const container = document.querySelector(".container");
//container.innerHTML = "<h1> This is the heading </h1>";
//console.log(container);

//const btn = document.querySelector(".btn");
//btn.classList.add("btn");

// console.log(a)
// //console.log(b) 

// var a=3453 // global scope for var
// let b=4567 // script scope for let and const


// console.log(a)
// console.log(b)

// function print(){
//     let c = 7890
//     console.log("Inside fn")
// }

// print();

// function infinite(){
//     infinite()
// }
// infinite()

// console.log("a")
// console.log("b") // TDZ (Temporal Dead Zone) for let and const

// let a = 10
// let b = 20

// let total = 345

// function calculate(){
//     console.log(total)
//     let total = 567
// }
// calculate()

// console.log("First Line")
// setTimeout(()=>console.log("Inside setTimeout"),0)
// console.log("Last Line")

// const studentsnames=document.querySelector("#Name");
// const button=document.querySelector(".btn");
// const list=document.querySelector(".list");

// button.addEventListener("click",()=>{
    
//     // create li element
//     const li= document.createElement("li")
//     const deleteButton=document.createElement("button")
//     //provide text to li element
//     li.innerText=studentsnames.value
//     deleteButton.innerText="Delete"

//     deleteButton.addEventListener("click",()=>{
//         list.removeChild(li)
//         //li.remove() // another way to delete element
//     })

//     li.appendChild(deleteButton)
//     list.appendChild(li)
//     studentsnames.value=""
// })

// function print(){   //callback function
//     console.log("Print Function Called")
// }

// function greet(print){   // higher order function
//     setTimeout(() => {
//     console.log("Hello, welcome to the JavaScript world!")
//     print()
//     }, 2000)
// }

// greet(print);

// function finishhomework(callback){
//     console.log("Starting Homeworks")        // Callback Hell example
//     setTimeout(() => {
//     console.log("Homework done")
//     callback()
//     }, 2000);
// }

// function eatdinner(callback){
//     console.log("Starting Dinner")
//     setTimeout(() => {
//         console.log("Dinner done")
//         callback()
//     }, 2000);
// }

// function watchtv(){
//     console.log("Starting TV time");
//     setTimeout(() => {
//         console.log("TV time done")
//     }, 2000);   
// }

// // chained callbacks in stepwise manner
// finishhomework(()=>{
//     eatdinner(()=>{
//         watchtv()
//     })
// });

// const p = new Promise((resolve, reject) => {
//     console.log("Going to do the homework");

//     setTimeout(() => {
//         const done = true;
//         if (done) {
//             resolve("Homework is done");
//         } else {
//             reject("Homework is not done");
//         }
//     }, 3000);
// });

// p.then((message) => {               //then allows us to handle resolved promise
//     console.log( message);
// }).catch((error) => {               //catch allows us to handle rejected promise
//     console.log( error);
// }).finally(() => {                     //finally allows us to execute code after promise is settled
//     console.log("Promise is settled");
// });

// function finishhomework(){
//     const p= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true
//             if(done){
//                 console.log("Homework is done")
//                 resolve("Homework is done")
//             }
//             else{
//                 reject("Homework is not done")
//             }
//         }, 2000);
//     })
//     return p
// }

// function eatdinner(){
//     const p=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true
//             if(done){
//                 console.log("Dinner is done")
//                 resolve("Dinner is done")
//             }
//             else{
//                 reject("Dinner is not done")
//             }
//         }, 2000);
//     })
//     return p
// }

// function gotoplayground(){
//     const p=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let done=true
//             if(done){
//                 console.log("Playground time is done")
//                 resolve("Playground time is done")
//             }
//             else{
//                 reject("Playground time is not done")
//             }
//         }, 2000);
//     })
//     return p
// }

// // chaining promises
// finishhomework()
// .then((message)=>{
//     console.log(message)
//     return eatdinner()
// })
// .then((message)=>{
//     console.log(message)
//     return gotoplayground()
// })
// .then((message)=>{       // each .then handles resolved promise
//     console.log(message)
// })
// .catch((error)=>{       // .catch handles any rejection in the chain
//     console.log(error)
// }).finally(()=>{        // finally runs after all promises are settled and if any rejection occurs then finally runs after catch
//     console.log("All tasks are done")
// })

// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homework Completed")
//                 res("Homework done")
//             }
//             else{
//                 rej("Homework not done")
//             }
//         },2000)
//     })
//     return p;
// }




// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Dinner Completed")
//                 res("Dinner done")
//             }
//             else{
//                 rej("Dinner not done")
//             }
//         },2000)
//     })
//     return p;
// }




// function goToPlayground(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Went to pg")
//                 res("PG Time")
//             }
//             else{
//                 rej("Not Allowed")
//             }
//         },2000)
//     })
//     return p;
// }

// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground
// }).then((data)=>{
//     console,log(data)
// })
// .catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("All done")
// })

// console.log("Frst Line")
// setTimeout(() => {
//     console.log("Inside setTimeout")
// }, 0);
// const promise = new Promise((resolve, reject) => {
//     resolve("Promise Resolved")
// });
// promise.then((message) => {
//     console.log(message)
// });
// const promise2 = new Promise((resolve, reject) => {
//     resolve("Second Promise Resolved")
// });
// promise2.then((message2) => {
//     console.log(message2)
// });
// const promise3 = new Promise((resolve, reject) => {
//     resolve("Third Promise Resolved")
// });
// promise3.then((message3) => {
//     console.log(message3)
// });
// console.log("Last Line")


//# Event Loop: This mechanism ensures that asynchronous operations are handled properly without blocking the main thread.
// 1. Call Stack: Synchronous code is executed here.
// 2. Web APIs: Asynchronous operations like setTimeout are handled here. It send a callback to the Callback Queue once 
//    the operation is complete.
// 3. Callback Queue: Callbacks from Web APIs are queued here. They wait for the call stack to be empty before 
//    being executed.
// 4. Microtask Queue: Promises are handled here with higher priority than Callback Queue. Event loop checks this queue 
// before the Callback Queue and executes any pending microtasks before moving to the next task in the Callback Queue.
// Note:- If call stack is empty, microtasks are executed first, followed by callbacks from the callback queue.
// Output Order: First Line,
//               Last Line,
//               Promise Resolved
//               Inside setTimeout, because microtasks (promises) have higher priority than macrotasks (setTimeout).

function orderfood(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Food Ordered")
            resolve()
        }, 2000);
    })
}

function cookfood(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Food Cooked")
            resolve()
        }, 3000);
    })
}

function eatfood(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Food Eaten")
            resolve()
        }, 1000);
    })
}

// orderfood().then(()=>{
//     return cookfood()
// }).then(()=>{
//     return eatfood()
// }).then(()=>{
//     console.log("All done")
// })

async function processfood(){
    await orderfood()
    await cookfood()
    await eatfood()
    console.log("All done")
}

processfood()
