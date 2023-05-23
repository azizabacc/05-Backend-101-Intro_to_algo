// Write a function which receives a string in lowercase and returns an uppercase sentence.code
const {upperCase} = require('./upperCase');

//ask user to give a string
const prompt = require('prompt-sync')();
let string= prompt('Enter a string: ');

//check the characters of the string
//transform if lowercase to uppercase
function upperCaseStr(string){
    for(let i=0; i<string.length; i++){
        string = string.replace(string[i],upperCase(string[i]));
    }
    return string;
}
 // test function 
console.log(upperCaseStr(string));