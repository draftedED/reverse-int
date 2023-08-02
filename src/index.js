module.exports = function reverse (n) {
   const inputToString = n.toString();
   let reverseString = '';
   for (i = 0; i < inputToString.length; i++) {
      reverseString += inputToString[inputToString.length - i - 1]
   }  
   return parseInt(reverseString);
}