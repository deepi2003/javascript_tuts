var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  var verse = verseChoose.value;
  updateDisplay(verse);
};


function updateDisplay(verse) {
     const url =  "http://localhost:8000/"+verse.replace(" ", "").toLowerCase() + ".doc";
     console.log(url);
     fetch(url).then(function(response) {
       response.text().then(function(text){
         console.log(`RESPONE: ${text}`)
         poemDisplay.textContent = text;
       });
     });

};
