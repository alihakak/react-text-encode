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
 
  export const verticalFlip =  (inputStr) => {
    inputStr = inputStr.toLowerCase();
    let verticalFlipValue = [];
    let charPosition = -1;
    for (var i = 0; i < inputStr.length; i ++)
    {
      if  (row1.includes(inputStr[i])) {
        charPosition = row1.indexOf(inputStr[i], row1);
        verticalFlipValue.push(row4[charPosition]);
      } else if  (row2.includes(inputStr[i])) {
        charPosition = row2.indexOf(inputStr[i], row2);
        verticalFlipValue.push(row3[charPosition]);
      } else if  (row3.includes(inputStr[i])) {
        charPosition = row3.indexOf(inputStr[i], row3);
        verticalFlipValue.push(row2[charPosition]);
      } else if  (row4.includes(inputStr[i])) {
        charPosition = row4.indexOf(inputStr[i], row4);
        verticalFlipValue.push(row1[charPosition]);
      } else {
        verticalFlipValue.push(inputStr[i]);
      }
    }
    return verticalFlipValue;
  }
  export const shiftBy = (inputStr, shiftBy) => {
    let shiftedText = [];
    inputStr = inputStr.toLowerCase();
    const allRows = row1.concat(row2).concat(row3).concat(row4);
    for (var i = 0; i < inputStr.length; i ++)
    {
      if (allRows.includes(inputStr[i])) {
       const charPosInArray = allRows.indexOf(inputStr[i], allRows);
        if (shiftBy < 0 || shiftBy === 0) {
          if ((shiftBy % 40) === 0) { //in-line shift to same entered character 
            shiftedText.push(allRows[charPosInArray]);
          } else {
            if ((charPosInArray + (shiftBy % 40)) < 0) {
                shiftedText.push(allRows[allRows.length + (charPosInArray + (shiftBy % 40))]);
            } else {
                shiftedText.push(allRows[charPosInArray + (shiftBy % 40)]);
            }
          }
        } else if (shiftBy > 0) {
            shiftedText.push(allRows[(charPosInArray + (shiftBy % 40)) % 40]);
        }
      } else {
        shiftedText.push(inputStr[i]);
      }
    }
    return shiftedText;
  }