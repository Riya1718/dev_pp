// Async keyword
// Await keyword

// Async keyword => it can be used to make a async function
// Await keyword => it can be only used inside async function

// sync functions => they block stack

const fs=require("fs");

function sayHello(){
    console.log("fun say Hii !!!");
}

sayHello();



// async functions => they dont block stack , they are handled by node APIS
async function callMe(){
   // let f1=await fs.promises.readFile("./f1.txt"); 
    console.log("I am a async functions");
}
callMe();
