// Write an algorithm which prints all the even numbers from 0 to a given number.

//generation of a number beteween 0 and i
function getRandomInt(i) {
    return Math.floor(Math.random() * i);
  }

function evenNumber(n){
    let number = getRandomInt(n);
    for(let i=0;i<=number;i++){
        if(i%2==0){
            console.log(i);
        }
    }

}
evenNumber(9);