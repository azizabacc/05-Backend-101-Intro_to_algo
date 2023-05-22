// A print shop charges 0.12 € the ten first copy, 
// 0.11 € the next 20 
// and 0.10 € from there.
//  Write an algorithm which given a number of copies and calculates the price.


//
function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
  }
function copiePrice(a){
    let price=0; 
    if(a<=10){
        price=a *0.12;
    }else if(a>10 && a<=20){
        price=a*0.11;
    }else{
        price=a*0.10;
    }
    return price;
}
nbCopy= getRandomInt(30);
console.log(nbCopy);
console.log(copiePrice(nbCopy));