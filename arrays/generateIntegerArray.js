//func : generation of an array ( lenght = len) of random integers between 0 and maxValue

//import getRandomInt
const {getRandomInt} = require('./getRandomInt');
 

//func : generation of an array ( lenght = len) of random integers between 0 and maxValue
function generateIntegerArray(maxValue , len){
    let tab = [];
    for(let i=0;i<len;i++){
        tab.push(getRandomInt(maxValue));
    }
    return tab ;
}
module.exports = {generateIntegerArray};
