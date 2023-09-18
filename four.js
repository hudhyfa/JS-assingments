function examresult(mark){
    if(mark<50 && mark>=1){
      console.log("failed")
    }else if(mark>=50 && mark<=100){
      console.log("passed")
    }else{
      console.log("invalid input")
    }    
  }
 
 let mark = parseFloat(prompt("enter your mark: "));
 examresult(mark);