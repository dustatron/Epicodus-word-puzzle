$(document).ready(function(){

  // Takes string and returns a new string with values replaced. 
  function makePuzzle(string){
    var arrStrings = string.split("");
  
    arrStrings.forEach(function(letter, index){
      if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        arrStrings[index] = '-'
      }
    });
    return arrStrings.join(" ");
  }
  
  //Prints string to DOM
  function  printOutNow(string){
    $("#displayString").text(string);
  }
  
  //Listens for click and runs functions.
  $("#submitButton").click(function(event){
    event.preventDefault();

  //grab users input
  var userInputString = $("#userInputString").val();

  var resultString = makePuzzle(userInputString);
  printOutNow(resultString);
    
  });
  

});
/*
Word Puzzle
Create a website that uses a method to replace vowels in a string with the dash symbol "-" to create a word puzzle to solve. Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.

Example:

String Input: "Believe you can and you're halfway there. Theodore Roosevelt"

Puzzle Output: "B-l--v- y-- c-n -nd y--'r- h-lfw-y th-r-. Th--d-r- R--s-v-lt"

Do this without "regular expressions".
*/