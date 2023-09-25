let size=parseInt(prompt("Enter the size"));
let arr1=[]
let arr2=[]

console.log("Enter the elements");
for(let i=0;i<size;i++){
  arr1[i]=parseInt(prompt(""));
}
for(let i=0;i<size-1;i++){
  arr2[i]=arr1[i]*arr1[i+1];
}
console.log(arr2);
