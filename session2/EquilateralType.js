/*Equilateral Type or not?
1) understand the problem - You are given three numbers side1, side2 and side3 as arguments. 
You have to implement the function isEquilateralType that will return true if all the sides are equal else it will return false.

Please note: All the sides will be greater than 0, that is side1> 0, side2> 0 and side3> 0.

 2) input: (3,4,5) false
  
 3) pseudo code: function isEquilateralType(side1, side2, side3);
 if (side1===side2)&&(side1===side3) true else false
 */

 function isEquilateralType(side1, side2, side3){
    if(side1==side2 && side1==side3){
        return true;
    }else{
        return false;
    }
 }
 const result = isEquilateralType(2,2,2);
 console.log(result);


