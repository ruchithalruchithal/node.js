/*compare the given numbers 2?
1) understand the problem- You are given three numbers a, b and c as arguments.
 You have to implement the function isDescending 
 that will return true only if the first number is greater than the second number AND 
 the second number is greater than the third number. Else, return false.
2) input : (2,3,4)
output:(2>3 && 3>4) false
3) pseudo code - isDec(a,b,c)
use if statement (a>b && b>c) true else false
console the stored result */

function isDec(a,b,c){
    if (a>b && b>c){
        return true;
    }else{
        return false;
    }
}
let result = isDec(3,2,1);
console.log(result);



