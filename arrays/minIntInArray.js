// Write an algorithm which receives an array of integers and prints its minimum.


//import generateIntegerArray
const {generateIntegerArray} = require('./generateIntegerArray');
const {sort} = require('./sort');

//generation of the array

 let tab = generateIntegerArray(10,5)
 //console.log(tab);


// func : gives the minimum integer in the array 
function maxIntInArray(tab){
    sort(tab);
    //console.log(tab);
    return (tab[0])
}
console.log(maxIntInArray(tab));
