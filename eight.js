
let limit = parseInt(prompt("enter a number:"))
oddsum(limit);

function oddsum(limit){  
  let sum = 0;
for(let i=1; i<=limit; i++){
  if(i%2!=0){
    sum += i;
  }
}
  console.log("sum of odd numbers: " + sum)
}