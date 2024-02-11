/* find the smallest of three numbers ?
1) understant the problem - You are given three numbers a, b and c as arguments.
 You have to implement the function findSmallest and return the smallest of the three numbers.

 2) input: (2,3,4) 
 output: 2

 3) pseudo code : function findSmallest(a,b,c)
 if(a<b)&&(a<c)
*/

function findSmallest(a,b,c){
    if(a<b && a<c){
        return a;
    }else if(b<a && b<c){
        return b;
    }else{
        return c;
    }
}
    
const result = findSmallest(2,4,6);
console.log(result);
