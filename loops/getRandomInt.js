//generation of a number beteween 1 and i
function getRandomInt(i) {
    return Math.floor(1+Math.random() * i);
  }
function oneToNumber(n){
for(let i=0;i<=n;i++){
    console.log(i);
}
}
let n = getRandomInt(8)
console.log(" n =" , n);
oneToNumber(n);

module.exports = {getRandomInt}