
function upperCase(char){
    // convert into ASCII value
    let asciiCode =char.charCodeAt(0);
    // if lowercase => uppercase
    if (asciiCode>=97 && asciiCode<=122){
        char = String.fromCharCode(asciiCode - 32);
    }
  return char;
}
module.exports = {upperCase};
