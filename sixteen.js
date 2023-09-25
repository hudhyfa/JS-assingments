let num=parseInt(prompt("Enter a number"));
let flag=0;
for(let i=2;i<num;i++){
  if(num%i==0){
    flag=1;
    break;
  }
}
if(flag==1){
  console.log("Number is not Prime")
}
else{
  console.log("Number is Prime")
}

