let word = prompt("enter a word");
let reverseWord = word.split("").reverse().join("")


if(word == reverseWord){
  console.log("word is pallindrome")
}else{
  console.log("word is not pallindrome")
}
