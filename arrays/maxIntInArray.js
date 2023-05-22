// Write an algorithm which receives an array of integers and prints its maximum.


//import generateIntegerArray and sort
const {generateIntegerArray} = require('./generateIntegerArray');
const {sort} = require('./sort');

//generation of the array

 let tab = generateIntegerArray(10,5)
 //console.log(tab);


// func : gives the maximun integer in the array 
function maxIntInArray(tab){
    sort(tab);
    //console.log(tab);
    return (tab[tab.length -1])
}
console.log(maxIntInArray(tab));

