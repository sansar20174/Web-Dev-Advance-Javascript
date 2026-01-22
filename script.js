//const para=document.querySelectorAll("p")   
//para[0].textContent="This is the updated text for the first paragraph."
//para[1].textContent="This is the updated text for the second paragraph."
//console.log(para)

//const container = document.querySelector(".container");
//container.innerHTML = "<h1> This is the heading </h1>";
//console.log(container);

//const btn = document.querySelector(".btn");
//btn.classList.add("btn");

// debugger
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

let total = 345

function calculate(){
    console.log(total)
    let total = 567
}
calculate()
