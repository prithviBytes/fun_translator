var image = document.getElementById("illustrations");
var body = document.getElementById("body");
var textarea = document.getElementById("textarea");
var header = document.getElementById("header");
var footer = document.getElementById("footer");
var div = document.getElementById("output")
var btn =  document.getElementById("btn");
var footerText = document.getElementById("footer-text");
var content = document.getElementById("content")
var guide = document.getElementById('guide');

var apis = [
    "https://api.funtranslations.com/translate/dothraki.json",
    "https://api.funtranslations.com/translate/shakespeare.json",
    "https://api.funtranslations.com/translate/yoda.json",
    "https://api.funtranslations.com/translate/pirate.json"
]

var api = "";

if(api == ""){
    btn.disabled = true;
}

function removeClass() {
    body.removeAttribute('class');
    textarea.removeAttribute("class");
    header.removeAttribute("class");
    footer.removeAttribute("class");
    div.removeAttribute("class");
    btn.removeAttribute("class")
    div.innerHTML = "";
    content.classList.remove("content-hidden");
    guide.classList.add("content-hidden");
}

function changeLanguage(language) {

    switch(language){

        case 'dothraki':{
            removeClass();
            api = apis[0];
            image.setAttribute("src","./dothraki.png");
            body.classList.add("dothraki");
            header.classList.add("section");
            header.classList.add("color-dothraki");
            footer.classList.add("foooter");
            footer.classList.add("color-dothraki");
            textarea.classList.add("textarea-dothraki")
            div.classList.add("output");
            div.classList.add("textarea-dothraki");
            btn.classList.add("btn");
            btn.classList.add("btn-dothraki");
            btn.disabled = false;
            footerText.innerHTML = "The Dothraki language is a constructed fictional language in George R. R. Martin's fantasy novel series <br> A Song of Ice and Fire and its television adaptation Game of Thrones, where it is spoken by the Dothraki <br> the indigenous inhabitants of the Dothraki Sea.";
        }
        break;

        case 'shakesphere':{
            image.setAttribute("src","./shakesphere.png");
            removeClass();
            api = apis[1];
            body.classList.add("shakesphere");
            header.classList.add("section");
            header.classList.add("color-shakesphere");
            footer.classList.add("foooter");
            footer.classList.add("color-shakesphere");
            textarea.classList.add("textarea-shakesphere")
            div.classList.add("output");
            div.classList.add("textarea-shakesphere");
            btn.classList.add("btn");
            btn.classList.add("btn-shakesphere");
            btn.disabled = false;
            footerText.innerHTML = "Shakespeare invented many words and his style of narration in many ways was unique to his time.<br> His ever popular works ( dramas and poems ) makes his language style live even today."
        }

        break;

        case 'yoda':{
            image.setAttribute("src","./yoda.png")
            removeClass();
            api = apis[2];
            body.classList.add("yoda");
            header.classList.add("section");
            header.classList.add("color-yoda");
            footer.classList.add("foooter");
            footer.classList.add("color-yoda");
            textarea.classList.add("textarea-yoda")
            div.classList.add("output");
            div.classList.add("textarea-yoda");
            btn.classList.add("btn");
            btn.classList.add("btn-yoda");
            btn.disabled = false;
            footerText.innerHTML = "Yoda often orders sentences as Object-Subject-Verb, split verbs, switches entire phrases and <br> sometimes uses sentences that are different from his normal syntax! Because of this it is difficult to accurately represent<br> his sentence structure. But we tried hard and we constantly improve our patterns.<br> Have fun and may the force be with you!"
        }

        break;

        case 'pirates':{
            image.setAttribute("src","./Captain-Jack-Sparrow.png")
            removeClass();
            api = apis[3];
            body.classList.add("pirate");
            header.classList.add("section");
            header.classList.add("color-pirate");
            footer.classList.add("foooter");
            footer.classList.add("color-pirate");
            textarea.classList.add("textarea-pirate")
            div.classList.add("output");
            div.classList.add("textarea-pirate");
            btn.classList.add("btn");
            btn.classList.add("btn-pirate");
            btn.disabled = false;
            footerText.innerHTML = "Priates of Carrebian Fan? You have landed to the rigth place. Learn the language Jack Sparrow Speaks.<br> Have Fun!!!!!"
        }
        break;
    }
}

function generateURL(text) {
    return api + "?text=" + text;
}

function clickHandler() {
    console.log("Button was clicked")
    var userInput = textarea.value;
    console.log("this is the user input "+userInput);
    fetch(generateURL(userInput))
    .then(respons => 
        respons.json()).then( json => {
            var translatedText = json.contents.translated;
            console.log("Translated Text "+translatedText);
            div.innerText = translatedText;
        })
}

btn.addEventListener("click",clickHandler);