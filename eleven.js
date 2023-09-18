let arrInput = prompt("enter array values with , b/w");
let arr = arrInput.split(",");

let evenCount = 0;

arr.forEach((i)=>{
  if(i % 2 == 0){
    evenCount+=1;
  }
})

console.log("even count in the array : "+ evenCount);