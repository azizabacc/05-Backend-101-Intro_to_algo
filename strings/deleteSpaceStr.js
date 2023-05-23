// Write a function which receives a sentence full of whitespace and returns it without them.
// str = string.split().join()

let string = "aaa zzz eee rrrrr      zzzzzz rrrr";
function deleteSpaceStr(string){
    let array = [];
    let start = 0;
    let str = "";
    let spaceInterval = 0;
    for(let i=0; i<string.length; i++){
        //check if there is more than one space
        while(string.charCodeAt(i+1)==32){
            i++;
            spaceInterval++;
            console.log("itr space nb : ",i)
        }
        // copie the word in the array 
        if(string.charCodeAt(i)==32){
            console.log("space at index : ",i);
            for(let j=start;j<i-spaceInterval;j++){
                str+=string[j]
              }
              console.log(str)
              array.push(str);
              start = i+1;
              spaceInterval = 0;
              str="";
            }
        }
          // add last word
      if (start < string.length) {
        for (let j = start; j < string.length; j++) {
          str += string[j];
        }
        array.push(str);
      }
    console.log(array);
     //transform the array in string 
     let result ="";
     for(let i=0; i<array.length; i++){
        result+=array[i];
     }
     return result;
}


 console.log(deleteSpaceStr(string));