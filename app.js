var buttonObj = document.querySelector("#button-en");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

buttonObj.addEventListener("click", function clickHandler(){
    outputText.innerText = "Hi Atique! " + inputText.value;
});

