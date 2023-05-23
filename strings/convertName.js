// Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"

let string="Doe, John";

function convetName(string){
    let str = "";

let i = 0;
do {
    i++;
   //console.log("itiration ", i)
  } while (string.charCodeAt(i)!=44);
      
  console.log("last value of i : ",i)
// copy the name    
  for(let j=0;j<string.length-i-1;j++){
    str+=string[i+j+1]
  }
  // add space between the name and last name
  str+=" ";
  //copie the last name
  for(let j=0;j<i;j++){
    str+=string[j]
  }
  return str;

}
console.log(convetName(string));