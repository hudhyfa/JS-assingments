let size=parseInt(prompt("Enter the Size"));
let arr1=[];
let arr2=[];
console.log("Enter the array one elements")
 for(let i=0;i<size;i++){
   arr1[i]=[]
   for(let j=0;j<size;j++){
     arr1[i][j]=parseInt(prompt(""));
   }
 }
console.log("Enter the array two elements")
 for(let i=0;i<size;i++){
   arr2[i]=[]
   for(let j=0;j<size;j++){
     arr2[i][j]=parseInt(prompt(""));
   }
 }
let sumarr=[];
for(let i=0;i<size;i++){
  sumarr[i]=[]
  for(let j=0;j<size;j++){
    sumarr[i][j]=arr1[i][j]+arr2[i][j];
  }
}
console.log("Sum of two array is");
console.log(sumarr);
