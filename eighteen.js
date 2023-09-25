let writtentest=parseInt(prompt("Enter marks in Written Test"));
let labexam=parseInt(prompt("Enter marks in Lab Exam"));
let assignments=parseInt(prompt("Enter marks in Assignments"));
let grade=(writtentest*70)/100+(labexam*20)/100+(assignments*10)/100;
console.log("Grade of student is:"+grade);
