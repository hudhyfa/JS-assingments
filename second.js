function summer(firstnum,secondnum){
    let sum = 0;
    sum += firstnum + secondnum
    return sum;
  }
 
 let first = parseInt(prompt("enter the first number"));
 let second= parseFloat(prompt("enter the second number"));
 var result = parseFloat(summer(first,second));
 console.log("the sum of two numbers is: "+result);