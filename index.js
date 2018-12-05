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

function johnLennonFacts (facts) {
  var i = 0;
  while (i < facts.length) {
    facts.splice( i, 0, '!!!')
    i++;
    return facts;
  }
  return facts;
}