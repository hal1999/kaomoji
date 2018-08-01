"use strict";

function getImageNumber(wordFitMap, word) {
  const array = wordFitMap.get(word);
  
  if(!array){
    return -1;
  }

  let sum = 0;
  array.forEach(element => {
    sum += element;
  });

  const target = Math.ceil(Math.random() * sum);
  let current = 0;
  let imageNumber = 0;
  array.some((element, index) => {
    current += element;
    if(target <= current){
      imageNumber = index;
      return true;
    }
  });
  
  console.log('[' + word + '] sum:' + sum + ' target:' + target + ' imageNumber:' + imageNumber);

  return imageNumber;
}

module.exports = {
  getImageNumber: getImageNumber,
};