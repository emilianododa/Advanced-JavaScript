let anchorElement = document.querySelector("p a")
anchorElement.href = "https://google.com"

// Inserting HTML element via JavaScript

let newElement = document.createElement("a")
newElement.href = "https://pinterest.com"
newElement.textContent = "pinterest"

let firstParagraph = document.querySelector("p")

firstParagraph.append(newElement)