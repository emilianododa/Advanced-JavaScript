let paragraphElement = document.querySelector("p")

function changeParagraphText(){
    paragraphElement.textContent = "Clicked"
}

paragraphElement.addEventListener("click",changeParagraphText )

let userInput = document.querySelector("input")

function trackUserInput(){
let enteredText = userInput.value
console.log(enteredText)
}

userInput.addEventListener("input", trackUserInput)