/* grade the student based on the marks ?
understand the problem - A school has the following rules for grading system:

[0, 25) - F

[25, 45) - E

[45, 50) - D

[50, 60) - C

[60, 80) - B

[80, 100] - A

If the input is less than 0 or greater than 100 then it is considered invalid.

You are given a number marks as an argument.
 You have to implement the function gradeMarks such that it will return the corresponding grade or "Invalid" if the input is invalid. 

 2) input : (45)
 output : E */

 function gradeMarks(num){
    if(num<0 || num>100){
        return "invalid";
    } if(num == 0 || num < 25 ){
        return "Fail";
    } if(num == 25 || num < 45){
        return "E";
    } if(num == 45 || num < 50){
        return "D";
    } if (num == 50 || num < 60){
        return "C";
    } if (num == 60 || num < 80){
        return "B";

    } if (num == 80 || num < 100){
        return "A";
    } if (num==100){
        return "A+"
    }else{
        return "invalid input";
    }

 }
  const result = gradeMarks(7);
  console.log(result);