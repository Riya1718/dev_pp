let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

// files read krni => serially => async function

// let idx=0;


// // wrong solution
// while(idx <files.length){
//     fs.readFile(files[idx] , function(error , data){
//         console.log(data+"");
//         idx++;
//     })
 
// }

//correct solution

function getFilesContent(idx){
    if(idx==files.length){
        return;
    }
    
    fs.readFile(files[idx] , function(error , data){
        console.log(data+"");
        getFilesContent(idx+1);
    })

}

getFilesContent(0);