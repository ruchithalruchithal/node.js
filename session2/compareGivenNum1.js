/* compare the given number 1?
You are given three numbers a, b and c as arguments. You have to implement the function 
compareNumbers such that EITHER the first number is equal to the second OR the second number
 is equal to the third, return true. Else, return false.

 1) understand the problem - i have 3 argument (a,b,c),
 implement the fuction compareNumbers(a,b,c),
 use if stament , a==b || b==c give true else false

 2) input: (2,3,4)    (2,3,2)    (2,2,5)
output: false          false      true */

function compareNum(a,b,c){
    if(a==b || b==c){
        return true;
    }else{
        return false;
    }
}
let result = compareNum(2,2,2);
console.log(result);
