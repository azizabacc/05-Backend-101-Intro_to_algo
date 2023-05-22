// Write an algorithm which receives an array of integers and prints the position of its minimum.

//import generateIntegerArray and sort
const {generateIntegerArray} = require('./generateIntegerArray');
const {sort} = require('./sort');

//generation of the array
let tab = generateIntegerArray(10,5);
let copyTab =[];

for(let i=0;i<tab.length;i++){
    copyTab.push(tab[i]);
}
console.log(copyTab);

//sort array
sort(tab);
console.log(tab);
min =tab[0];
let i=0;
while(min !                                                                                                                                                                                                                                                                                                                                                                                                                                             =copyTab(0))