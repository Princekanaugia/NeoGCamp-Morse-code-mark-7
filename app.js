var btnTranslate = document.querySelector("#btn-translate");
var translateInput = document.querySelector("#translate-input")
var translateOutput = document.querySelector("#translate-output");
var morseCodeApiServerUrl = "https://api.funtranslations.com/translate/morse.json";


/* input-output processing Example
function clickTranslateHandler() {
    translateOutput.innerText = "input : "+translateInput.value;
};*/

function getTranslationUrl(text) {
    var translateUrl = morseCodeApiServerUrl + "?" + "text=" + text;
    return translateUrl;

};

function errorHandler(error){
    alert("error occured!! on server-side.\nPlease try again later");

};

function clickTranslateHandler() {
    var inputText = translateInput.value; // taking input

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        translateOutput.innerText = translatedText;
    })
    .catch(errorHandler) // we don't have to pass error argument in errorHandler(), it catches the error that occured and pass it.

};

btnTranslate.addEventListener("click", clickTranslateHandler)
