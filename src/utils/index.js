var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
var row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

export const horizontalFlip =  (inputStr) => {
    inputStr = inputStr.toLowerCase();
    let horizontalFlipValue = []; 
    let charPosition = 0;
    for (var i = 0; i < inputStr.length; i ++)
    {
      //Find which array character is in
      if (row1.includes(inputStr[i])) {        
        //Find place value of character in array
        charPosition = row1.indexOf(inputStr[i], row1);
        horizontalFlipValue.push(row1[(row1.length - 1) - charPosition]);

      } else if (row2.includes(inputStr[i])) {
        charPosition = row2.indexOf(inputStr[i], row2);
        horizontalFlipValue.push(row2[(row2.length - 1) - charPosition]);

      } else if (row3.includes(inputStr[i])) {
        charPosition = row3.indexOf(inputStr[i], row3);
        horizontalFlipValue.push(row3[(row3.length - 1) - charPosition]);

      } else if (row4.includes(inputStr[i])) {
        charPosition = row4.indexOf(inputStr[i], row4);
        horizontalFlipValue.push(row4[(row4.length - 1) - charPosition]);

      } else {
        horizontalFlipValue.push(inputStr[i]);
      }
    }
    return horizontalFlipValue;
  }
 