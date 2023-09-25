const prompt=require("prompt-sync")({sigint:true});

let input=prompt("Enter the input");
try{
  let reverse=input.split("").reverse().join();
  console.log("Reversed String is:"+reverse);
}
catch(err){
  console.log(err.message);
}
finally{
  console.log(`Type of ${input} is ${typeof(input)}`);
}
