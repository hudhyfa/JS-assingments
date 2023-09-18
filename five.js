
function resultgrade(mark){
    if(mark>=50 && mark<=59){
      console.log("grade: e");
    }
    else if(mark>=60 && mark<=69){
      console.log("grade: e");
    }
    else if(mark>=70 && mark<=79){
      console.log("grade: e");
    }
    else if(mark>=80 && mark<=89){
      console.log("grade: e");
    }
    else if(mark>=90 && mark<=100){
      console.log("grade: e");
    }
    else if(mark<50){
      console.log("failed")
    }
    else{
      console.log("invalid marks")
    }
  }
  
  let mark = parseFloat(prompt("enter your mark: "));
  resultgrade(mark);