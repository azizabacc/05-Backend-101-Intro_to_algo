// Write an algorithm which given the number of a day returns its name

//generation of a number beteween 1 and i
function getRandomInt(i) {
    return Math.floor(1+Math.random() * i);
  }

function dayNumber(a){
    switch(a){
        case 1 : 
        console.log("Monday");
        break;
        case 2 : 
        console.log("Tuesday");
        break;
        case 3 : 
        console.log("Wednesday");
        break;
        case 4 : 
        console.log("Thursday");
        break;
        case 5 : 
        console.log("Friday");
        break;
        case 6 : 
        console.log("Saturday");
        break;
        case 7 : 
        console.log("Sunday");
        break;
        default : console.log("introduce a number between 1 and 7")

    }
}
let day = getRandomInt(7);
console.log(day);
dayNumber(day);