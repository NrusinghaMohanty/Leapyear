var readlineSync=require("readline-sync")
console.log("Enter your Birthday in this below format\n")

var userquestion=readlineSync.question("dd-mm-yyyy ")

array=userquestion.split("-")
console.log("\nyour birth year is " + array[2])

var year=array[2];



if(isNaN(year)){
  console.log("\nYour data is not valid")
}else{
if(year % 4==0){
   if(year %100==0){
     if(year %400==0){
       console.log("\nYour birth year is a leap year")
     }else{
       console.log("\nYour birth year isn't leap year")
     }
    }else{
      console.log("\nYour birth year is a leap year")
    }
}else{
  console.log("\Your birth year isnot a leap year")
}
}