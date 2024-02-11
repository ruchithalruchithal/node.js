/* check person is elegible for blood donation or not?
1) understand the problem - You are given two numbers age and weight as arguments. 
You have to implement the function checkBloodDonationEligiblity that will determine if the given age is eligible for blood donation or not.

If the age is less than 18, return "UnderAge",

If the age is more than or equal to 18, but weight is less than or equal to 50, return "NotEligible",

If the age is more than or equal to 18, but weight more than 50, return 'Eligible'.

 */
/*function checkBloodDonationEligiblity(age , weight){
    if(age < 18){
        return "underage";
    } if(age >= 18 && weight < 50){
        return "not eligible";
    } if(age >= 18 && weight >= 50){
        return "eligible";
    }
}
const result = checkBloodDonationEligiblity(4, 49);
console.log(result); */

function checkBloodDonationEligiblity(age , weight){
if(age >= 18){
    if(weight > 50){
        return "Eligible";
    }else{
        return "not Eligible";
    }
}else{
    return "underage";
}

}
const result = checkBloodDonationEligiblity(20,58);
console.log(result);

    