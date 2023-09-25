let my_height=parseInt(prompt("Enter your height"))
try{
  if(isNaN(my_height)){
    throw("NotANumberError")
}
else if(my_height>70){
  throw("hugeheightError")
}
else if(my_height<=0){
  throw("TinyheightError")
}else{
  console.log(my_height)
}
}
catch(err){
  console.log(err)
}
