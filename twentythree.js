class myclass{
    main(){
   let arr=[]
   this.getArray(arr);
   this.displayArray(arr);
  }
  getArray(arr1){
   let size=parseInt(prompt("Enter the size"));
   console.log("Enter array elements");
   for(let i=0;i<size;i++){
     arr1[i]=[]
     for(let j=0;j<size;j++){
       arr1[i][j]=parseInt(prompt(""))
     }
   }
  }
  
  displayArray(arr){
   console.log(arr)
  }
  }
  let obj=new myclass();
  obj.main();
  