let size=prompt("Enter the size");
let arr=[];
console.log("Enter the elements");
for(let i=0;i<size;i++){
  arr[i]=parseInt(prompt(""))
}
function myFilter(arr){
  let sum=0;
  for(let i=0;i<size;i++){
    sum=sum+arr[i];
  }
  console.log("Sum:"+sum)
  return callback(sum)
}
function callback(sum){
  if(sum%2==0){
    console.log("True");
  }
  else{
    console.log("False");
  }
}
myFilter(arr);
