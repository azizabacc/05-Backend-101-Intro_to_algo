/*Write an algorithms which receives an integers _n_ and prints:

* the numbers from 1 to _n_
* the numbers from 1 to _n_ in descending order
* the numbers from _-n_ to _n_
* the odd numbers from 1 to _n_*/
//---------------------------------------------------------------------------//
//* the numbers from 1 to _n_
function oneToNumber(n){
    for(let i=1;i<=Math.abs(n);i++){
        console.log(Math.sign(n)*i);
    }
}
//oneToNumber(6);
//---------------------------------------------------------------------------//
//* the numbers from 1 to _n_ in descending order

function numberToOne(n){
    for(let i=Math.abs(n);i>=1;i--){
    console.log(Math.sign(n)*i);
    }
}
//numberToOne(-6);
//---------------------------------------------------------------------------//
//* the numbers from _-n_ to _n_
function negToPosValue(n){
    numberToOne(-Math.abs(n));
    console.log(0);
    oneToNumber(n);
 }
// negToPosValue(6);
//---------------------------------------------------------------------------//
//* the odd numbers from 1 to _n_*/
function oddNumber(n){
    for(let i=1;i<=Math.abs(n);i++){
        if(i%2!=0){
            console.log(Math.sign(n)*i);
        }
    }
}
//oddNumber(-20);

