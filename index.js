// add solution here
function theBeatlesPlay(musicians,instruments) {
 var array = [];

  
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    console.log(array.push(facts[i] + "!!!"))
    i++;
  
  }
 return array;
}



function iLoveTheBeatles(number) {
  var array = [];
  var number = 0;
 
  
  do {array.push("I love the Beatles!");
    i = i + 1;
    
  } while (number < 15);
  return array;
}