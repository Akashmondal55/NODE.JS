// // creating a multi line calculator using javascript

//  the faultu charecter does two thing
//  1. It takes two twoo number as input from the User.
//  2. it perdorms wrong operation:

//  + ----> -
//  * --->+
//  - --->/
//  / --->**
// 10% of the times provides wrong operation
 
console.log("Welcome to faulty calculator");
 const readline=require('readline');


 const rd=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
 });
//   let userinput=prompt("Enter the first Input");
//   let userinputb=promt("Enter the second input");
  function faultycalculator(a,b,operator){
    let result;


    const iscalFaulty=Math.random()<0.1;
    console.log("isccalFaulty:"+ iscalFaulty);

    if(iscalFaulty){
        //perform the faulty operation
        switch(operator){
            case '+':
                result=a-b;//  faulty substraction
                break;

            case '*':
                result=a+b;// faulty addition
                break;
            case'-':
                result=a/b;// faulty division
                break;
            case'/':
                result=a**b;// faulty multipication
                break;
            default:
                console:("Invalid Input");
                break;
        } 
    }
    else{
        switch(operator){
            case '+':
                result=a+b;//  faulty substraction
                break;

            case '*':
                result=a*b;// faulty addition
                break;
            case'-':
                result=a-b;// faulty division
                break;
            case'/':
                result=a/b;// faulty multipication
                break;
            default:
                console:("Invalid Input");
                break;
        }
    }
    return result;
}
    //rd.question("enter the numbers:" , function(a));{

rd.question("enter the numbers:", function (a){
    rd.question("Enter the operator +,-,*,/:", function(operator){
        rd.question("enter the numbers:", function(b){
            const result= faultycalculator(operator, parseFloat(a), parseFloat(b));
            // console.log(`result of ${a}+"  "${operator}+"  "${b}+ "is:+ ${result}` )
            console.log("result of", a+"  "+operator+"  "+b+"  "+ "is:"+" "+ result );
            rd.close();
        });
    });
});
    
 

            

        