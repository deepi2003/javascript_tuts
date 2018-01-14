var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  var verse = verseChoose.value;
  updateDisplay(verse);
};


function updateDisplay(verse) {
     const url =  "http://localhost:8000/"+verse.replace(" ", "").toLowerCase() + ".doc";
     console.log(url);
     var request = new XMLHttpRequest();
     request.open('GET', url);
     request.onload= function() {
       console.log(`RESPONE: ${request.response}`)
       poemDisplay.textContent = request.response;
     }
     request.send();
};
