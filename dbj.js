// origianl rating
var oriRatingElem = document.getElementsByClassName('ll rating_num');
var oriRating = oriRatingElem[0].outerText;

// converted rating
var cvtRating = (oriRating - 2) / 4 * 5;

var cvrtElem = document.createElement('div');
cvrtElem.appendChild(document.createTextNode(cvtRating));
cvrtElem.setAttribute('id', 'dbj_cvtRating_num');
cvrtElem.setAttribute('style', 'font-size: 20px;');

var ratingRootElem = document.getElementsByClassName('rating_self clearfix');
ratingRootElem[0].insertBefore(cvrtElem, ratingRootElem[0].childNodes[2]);
