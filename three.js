function findinterest(p,r,t){
    let interest = 1;
    interest = (p*r*t)/100;
    return interest
  }
 
 let p = parseInt(prompt("enter the principal amount"));
 let r= parseFloat(prompt("enter the Interest rate"));
 let t= parseFloat(prompt("enter the number of years"));
 var result = parseFloat(findinterest(p,r,t));
 console.log("Simple interest : "+result);