class calculator{
    addition(num1,num2){
     return num1+num2;
   }
    subtraction(num1,num2){
     return num1-num2;
   }
    multiplication(num1,num2){
     return num1*num2;
   }
    division(num1,num2){
     return num1/num2;
   } 
  }
  const calc=new calculator();
  let num1=parseInt(prompt("Enter first Number"));
  let num2=parseInt(prompt("Enter second Number"));
  let result="";
  console.log("1.Addition \n2.Subtraction \n3.Multiplication \n4.Division")
  let select=parseInt(prompt(""));
  switch(select){
   case 1:
     result=calc.addition(num1,num2);
     break;
   case 2:
     result=calc.subtraction(num1,num2);
     break;
   case 3:
     result=calc.multiplication(num1,num2);
     break;
   case 4:
     result=calc.division(num1,num2);
     break;
   default:
     console.log("Invalid Option");
  }
  console.log("Result="+result);