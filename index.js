//                          header and text edit (hard)

const h1 = document.getElementById("header") ;
    h1.style.textAlign = "center";
    h1.style.fontSize = "50px";
    h1.textContent = "Dom Olympics";
    h1.innerHTML += "<p class = name> Jayden Alimonda  </p>";
    h1.querySelector(".name").style.fontSize = "30px";

//const main = document.querySelectorAll("#main .messages");

var messages = document.querySelector(".messages");
var messageText = messages.querySelectorAll("div.message");


 messageText[0].textContent = "hi";
 messageText[1].textContent = "sup";
 messageText[2].textContent = "nothin' much hbu?";
 messageText[3].textContent = "same ol same ol";


//                          clear button

var clearButton = document.getElementById("clear-button");
function clear(){
    messages.innerHTML = ""
}

clearButton.addEventListener("click", clear);

//                            message function
/*submitButton.addEventListener("click", function (e) {
    e.preventDefault()
    var newMessage = document.getElementById("input")
    newMessage.value = ""
    })
*/

let i=0
function userInput(event){
    event.preventDefault()
    var newMessage = document.getElementById("input").value;
    if (i % 2 === 0) {
    document.querySelector(".messages").innerHTML += "<div class='message left'>" + newMessage + "</div>" ; 
    } else { document.querySelector(".messages").innerHTML += "<div class='message right'>" + newMessage + "</div>"};
    themeFunction()
    document.getElementById("input").value = ""
}

var form = document.message
form.addEventListener("submit", userInput)
/*document.getElementById("send").addEventListener("click", function clearTextBox(e){
    e.preventDefault();
    var textBox = document.getElementById("input")
    textBox.value = ""
})
*/
var submitButton = document.getElementById("send")

//                              Theme

var dropdown = document.getElementById("theme-drop-down")
dropdown.addEventListener("change", themeFunction)

function themeFunction (){
    var messageText = messages.querySelectorAll("div.message");
    console.log(messageText.length);
    if (dropdown.value == "theme-two") {
        for (i = 0; i < messageText.length; i++) {
            if (i % 2 === 0) {
                messageText[i].style.backgroundColor = "black"
                messageText[i].style.color = "white"
            } else if (i % 2 === 1){
                messageText[i].style.backgroundColor = "red"
            }
        }
    } else if (dropdown.value == "theme-one"){
        for (i = 0; i < messageText.length; i++) {   
        if (i % 2 === 0) {
            messageText[i].style.color = "black";
            messageText[i].style.backgroundColor = "burlywood";
        }
        else if (i % 2 === 1){
        messageText[i].style.backgroundColor = "lightblue";
        
        }
        }

    }
} 

