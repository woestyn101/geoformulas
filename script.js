'use strict';

document.querySelector('.Perimeter').addEventListener('click', function () {
  let sideLength = document.querySelector('.sideSquare').value;
  let thePerimeter = sideLength * 4;
  let theArea = sideLength * sideLength;

  document.querySelector('.answerPerimeter').value = thePerimeter;
});
document.querySelector('.Area').addEventListener('click', function () {
  let sideLength2 = document.querySelector('.sideSquare').value;
  let theArea = sideLength2 * sideLength2;

  document.querySelector('.answerArea').value = theArea;
});

function perimeterRectangle() {
  let theWidth = document.querySelector('.widthRectangle').value;
  //console.log(theWidth);
  let theLength = document.querySelector('.lengthRectangle').value;
  let thePeriRec = 2 * theWidth + 2 * theLength;
  console.log(thePeriRec);
  document.querySelector('.answerPerimeterRectangle').value = thePeriRec;
}

document
  .querySelector('.periRectangle')
  .addEventListener('click', perimeterRectangle);

function areaRecttangle() {
  let theWidth = document.querySelector('.widthRectangle').value;
  //console.log(theWidth);
  let theLength = document.querySelector('.lengthRectangle').value;
  let theAreaRec = theWidth * theLength;
  console.log(theAreaRec);
  document.querySelector('.answerAreaRectangle').value = theAreaRec;
}

document
  .querySelector('.areaRectangle')
  .addEventListener('click', areaRecttangle);
