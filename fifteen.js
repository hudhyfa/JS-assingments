function main(){
    let arr=[];
    getArray(arr);
    displayArray(arr);
  }
  
  function getArray(arr){
    let size=parseInt(prompt("Enter the size"));
    console.log("Enter the array Elements");
    for(i=0;i<size;i++){
      arr[i]=parseInt(prompt(""));
    } 
  }
  function displayArray(arr){ 
    console.log("Entered array is:");
    console.log(arr) 
  }
  main();