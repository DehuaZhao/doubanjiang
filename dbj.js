// origianl rating
var oriRatingElem = document.getElementsByClassName('ll rating_num');
var oriRating = oriRatingElem[0].outerText;

// converted rating
if (oriRating != "")
{
    var cvtRating = (oriRating * 10 - 2 * 10) * 5 / 4 / 10;

    var cvrtElem = document.createElement('div');
    cvrtElem.appendChild(document.createTextNode(cvtRating));
    cvrtElem.setAttribute('id', 'dbj_cvtRating_num');
    cvrtElem.setAttribute('style', 'font-size: 20px;');

    var ratingRootElem = document.getElementsByClassName('rating_self clearfix');
    ratingRootElem[0].insertBefore(cvrtElem, ratingRootElem[0].childNodes[2]);
}
