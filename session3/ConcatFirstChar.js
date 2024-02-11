/* concatinating of first char?
1) understand the problem -  You are given names of two students. 
They will form a team for an upcoming coding competition. 
The name of the team is the concatenation of the first characters of the two given names.
 Return the name of the team given the name of the students as arguments.
2) input: ruchi suji 
output: rs

3) pseudo code: function teamName(ruchitha , sujitha)
let result = ruchitha(0),sujitha(0);
concatinate the two string
return the result;
*/

function teamName(name1 , name2){
    let str = name1.charAt(0)+name2.charAt(0);
    return str;
}
//teamName(ruchitha,sujitha);
let result = teamName("ruchi","suji");
console.log(result);
