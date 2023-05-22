// Write an algorithm which throws a dice a given number of time 
// and count the number of time a certain number is received.
const {getRandomInt} = require('./getRandomInt');

function throwDices(a){
    let dicesValues= []; 
    let n = getRandomInt(a);
    console.log("nombre de jet : ",n);
    for(let i=1;i<=n;i++){
       dicesValues.push(getRandomInt(6));
    }
    return dicesValues;
    
}

function numberReccurence(a,b){
    dicesList = throwDices(a);
    let rec = 0;
    for(let i=0;i<dicesList.length;i++){
        if(dicesList[i]==b){
            rec++;
        }

    }
console.log("the reccurence of ",b," is : ", rec);
}

numberReccurence(20,3);