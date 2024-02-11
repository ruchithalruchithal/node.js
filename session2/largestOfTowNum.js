/* find the largest of tow numbers?
1) understant the problem: You are given two numbers a and b as arguments. 
You have to implement the function findLargest that will 
return the largest number between the two numbers.

2) input : (2,3)
out put: (2>3) true else false

3) pseudo code : function findLargest(a,b),
if statement (a>b) true esle false
console the stored result */

function findLargest(a,b){
    if(a>b){
        return true;
    }else{
        return false;
    }
}
let result = findLargest(6,4);
console.log(result);

