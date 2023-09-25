main()
  function main(){
  let arr1=[]
  let arr2=[]
  let sumarr=[]
  let size=getArray(arr1,arr2);
  sumarr=addArray(arr1,arr2,sumarr,size);
  displayArray(sumarr);
}
function getArray(arr1,arr2){
  let size=parseInt(prompt("Enter the size"));
  console.log("Enter array 1 elements");
  for(let i=0;i<size;i++){
    arr1[i]=[]
    for(let j=0;j<size;j++){
      arr1[i][j]=parseInt(prompt(""))
    }
  }
  console.log("Enter array 2 elements");
  for(let i=0;i<size;i++){
    arr2[i]=[]
    for(let j=0;j<size;j++){
      arr2[i][j]=parseInt(prompt(""))
    }
  }
  return size;
}
function addArray(arr1,arr2,sumarr,size){
  for(let i=0;i<size;i++){
    sumarr[i]=[]
    for(let j=0;j<size;j++){
      sumarr[i][j]=arr1[i][j]+arr2[i][j];
    }
  }
  return sumarr
}
function displayArray(sumarr){
  console.log(sumarr)
}

