// Write an algorithm which prints everything in an array.


//import getRandomInt from getRandomInt.js
const {getRandomInt} = require('./getRandomInt');


//func : generation of an array ( lenght = len) of random integers between 0 and maxValue
function generateIntegerTab(maxValue , len){
    let tab = [];
    for(let i=0;i<len;i++){
        tab.push(getRandomInt(maxValue));
    }
    return tab ;
}

//generation of the tab 
tab = generateIntegerTab(24535,7);

// func : printing everything in an array.
function printArray(a){
    for(let i=0;i<a.length;i++){
        console.log(a[i]);
    }
}
//call the function printArray
printArray(tab);
