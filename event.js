let paragraphElement = document.querySelector("p")

function changeParagraphText(){
    paragraphElement.textContent = "Clicked"
}

paragraphElement.addEventListener("click",changeParagraphText )

let userInput = document.querySelector("input")

function trackUserInput(event){
let enteredText = userInput.value
console.log(enteredText)
console.log(event)
}

userInput.addEventListener("input", trackUserInput)