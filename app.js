var txtInput = document.querySelector("#text-input")
var btnTranslate = document.querySelector("#btn-translate")
var outputDiv = document.querySelector("#output")

var apiURL = "https://api.funtranslations.com/translate/pirate.json"


function createURL(input) {
    return apiURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error occured ",error)
    alert("Something went wrong with server! Please try again after some time.")
}

function clickEventHandler() {
    var inputTxt = txtInput.value
    fetch(createURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var tranlateText = json.contents.translated;
        outputDiv.innerText = tranlateText;
    })

    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickEventHandler)