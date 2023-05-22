// Write a algorithm which receives an array of integers and check if its ordered ascendantly.
// Print true if the array is ordered, false if it’s not.

//import generateIntegerArray 
const {generateIntegerArray} = require('./generateIntegerArray');


//generation of the array of integers
let tab = generateIntegerArray(10,5);
console.log(tab);

//check if its ordered ascendantly
let ordered = true;
function orderedArray(tab){
    let ordered = true;
    for(let i=0; i<tab.length-1; i++){
        if(tab[i]>tab[i+1]){
            ordered = false ;
            break;
    }
}
return ordered;
}

console.log("The array is ordered : ", orderedArray(tab));

//----------------unit test----------------//
const {sort} = require('./sort');

//sort array
sort(tab);
console.log("the sorted array : ", tab);
console.log("The sorted array is ordered : ", orderedArray(tab));