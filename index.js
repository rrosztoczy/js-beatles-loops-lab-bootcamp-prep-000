// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var i;
  var fullArray;
  for (i = 0; i < musicians.length + 1; i++) {
    fullArray = emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return fullArray;
}