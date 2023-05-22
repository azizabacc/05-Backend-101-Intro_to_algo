//import generateIntegerArray and sort
const {generateIntegerArray} = require('./generateIntegerArray');
const {sort} = require('./sort');

//generation of the array
let tab = generateIntegerArray(10,5);
let copyTab =[];

for (let i = 0; i < tab.length; i++) {
    copyTab.push(tab[i]);
}
console.log("The generated array : ", copyTab);

//sort array
sort(tab);
console.log("the sorted array : ", tab);

let min = tab[0];
let position = 0;
for (let i = 0; i < copyTab.length; i++) {
    if (copyTab[i] == min) {
        position = i;
        break;
    }
    //console.log("loop ", i)
}         
console.log("The position of the minimum is", position, ", it's the", (position + 1), "element of the array.");
