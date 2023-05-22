// Write an algorithm which verify if a given positive integer is a perfect number,
//  meaning equal to the sum of his divisors (except himself).

function divisor(n,d){
    let divisor = 0 ;
    if(n%d==0){
        divisor = d;
    }
    return divisor;
}

function divisorSum(n){
    let sum = 0; 
    for(let i=1;i<n;i++){
        sum +=divisor(n,i);
    }
    return sum;
}
function perfectNumber(n){
    if( n == divisorSum(n) ){
        console.log(n , " is a perfect number");
    }else{
        console.log(n , "is not a perfect number" )
    }
}
perfectNumber(28);