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

const p = new Promise((resolve, reject) => {
    console.log("Going to do the homework");

    setTimeout(() => {
        const done = true;
        if (done) {
            resolve("Homework is done");
        } else {
            reject("Homework is not done");
        }
    }, 3000);
});

p.then((message) => {               //then allows us to handle resolved promise
    console.log( message);
}).catch((error) => {               //catch allows us to handle rejected promise
    console.log( error);
});