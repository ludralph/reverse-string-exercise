'use strict';
var exports = module.exports = {};
exports.reverseString = (word) =>
{
     // declare reverse word variable
     let reverseWord = "";
     // check if word is empty string
     if (word === ""){
       return null;
     }
     //loop through word from the last character to the first
     // and append to reverseWord
     for (let count = word.length-1; count >=0; count--){
       reverseWord = reverseWord + word[count];
     }
     // check if word is equal reverse word
     if (word === reverseWord){
       return true;
     }
     else{
       return reverseWord;
     }

}
