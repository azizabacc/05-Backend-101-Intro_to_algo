// Write a function which receives a character in uppercase and prints it in lowercase.
const prompt = require('prompt-sync')();
function lowerCase(){
    // take input from the user
    let string = prompt('Enter a character: ');
    // convert into ASCII value
    const asciiCode = string.charCodeAt(0);
    // return +32
    if (asciiCode>=65 && asciiCode<=90){
        string = String.fromCharCode(asciiCode + 32);
    }
  return string;
}

console.log(lowerCase());