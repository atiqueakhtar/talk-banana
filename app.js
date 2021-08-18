var buttonObj = document.querySelector("#button-en");
var inputTextObj = document.querySelector("#input-text");
var outputTextObj = document.querySelector("#output-text");

var url = "https://api.funtranslations.com/translate/minion.json"

function getTranslationalUrl(text){
    return url + "?text=" + text;
}
function errorHandler(error){
    console.log("error occured", error)
}

buttonObj.addEventListener("click", function clickHandler(){
    var inputText = inputTextObj.value;
    var textUrl = getTranslationalUrl(inputText);
    fetch(textUrl)
    .then(function jsonify(response){ return response.json(); })
    .then(function translate(json){ return json.contents.translated; })
    .then(function displayTanslated(text){ outputTextObj.innerText = text; })
    .catch(errorHandler)
});

