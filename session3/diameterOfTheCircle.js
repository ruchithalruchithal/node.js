/* find the diameter of a cricle?
1) understand the problem - You can calculate and print out expressions or variables in a template string itself.


You are given the number r representing the radius of the circle as an argument.

You need to implement the function circleValues which will only have 2 lines of code in it:

Create a single template string variable circle.

Return the template string.

*/

function circleValues(r){
    let str = `the circle have ${r} radius of ${2*r}`;
    return str;
}
let result = circleValues(5);
console.log(result);