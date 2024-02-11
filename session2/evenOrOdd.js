/*clasify input as even or odd?
1) understant the problem - You are given a number num as an argument. 
You have to implement the function evenOrOdd that will return "Even" for even numbers or "Odd" for odd numbers.

2) input : 3
output : even 

3) pseudo code : function evenOrOdd(num)
if (num%2===1) odd 
if (num%2===0) even */

function evenOrOdd(num){
    if(num%2===1){
        return "odd";
    }else{
        return "even";
    }
}
let result = evenOrOdd(3);
console.log(result);



