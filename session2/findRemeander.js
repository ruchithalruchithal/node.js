/* find the remender of the numbers?
1) understand the problem - i have two argument(a,b),
i need to implement the function remenderNum(a,b),
store the result in the variable and return the result,

2) input : (10, 3)
output: (10%3)=1 */

function remenderNum(a,b){
    let result = (a%b);
    return result;
}
const returnResult = remenderNum(10,3);
console.log(returnResult);
