console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let button = document.querySelector("#buttonOne")
console.log(button)

// Select the first p tag under that button
let text = document.querySelector("#textOne")
console.log(text)

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
button.addEventListener("click",function(event){
text.textContent="You guessed wrong!"
})


// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags
let button2 = document.querySelector("#buttonTwo")
console.log(button2)

let text2 = document.querySelector("#textTwo")
console.log(text2)
// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"

button2.addEventListener("click",function(event){
text2.textContent="You guessed right!"
})

// Task 3: Dog image flow
// Select the dog image
let button3 = document.querySelector("#dog")
console.log(button3)

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click
button3.addEventListener("click",function(event){
button3.src="post-boop.png"
})



// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this




// Task 4: Secret code flow
// Select the input
let button4 = document.querySelector("#code")
console.log(button4)




// Add an event listener to the input such that when a key is pressed, you console log the value
button4.addEventListener('keydown',function(event){
console.log('input value:', event.target.value)
})
// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)




