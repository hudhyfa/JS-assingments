const income=parseInt(prompt("Enter your income"));
let tax;
if(income<=250000){
  tax="No Tax";
}
else if(income>250000&&income<=500000){
  tax=(income*5)/100;
}
else if(income>500000&&income<=1000000){
  tax=(income*20)/100;
}
else if(income>1000000&&income<=5000000){
  tax=(income*30)/100;
}
else{
  console.log("Invalid Entry");
}
console.log("Income Tax Amount:"+tax)
