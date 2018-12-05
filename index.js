// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var i;
  var fullArray = [];
  for (i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return emptyArray;
}