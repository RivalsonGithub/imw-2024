//print message to console
console.log("bla bla bla");

//Change the color by clicking the circles
const greenCIrcle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
let interactionContainer = document.getElementById("interactionContainer");

greenCIrcle.addEventListener("click", function(){
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen";

    //Works for hexcode and RGB
    // interactionContainer.style.backgroundColor = "#36d637";
}) 
pinkCircle.addEventListener("click", function(){
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "plum";

}) 
blueCircle.addEventListener("click", function(){
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightblue";

}) 

//Loop Container
let loopContainer = document.getElementById("loopContainer");
const message = "Do not repeat :("

for(let i=0; i<10; i++){
    console.log(message);

    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);

}

//Condition Container
let conditionContainer = document.getElementById("conditionContainer");
let square = document.getElementById("square");
conditionContainer.addEventListener("mouseover", function(){
    square.style.backgroundColor = "lightgreen";
})
conditionContainer.addEventListener("mouseout", function(){
    square.style.backgroundColor = "lightsalmon";
})


//Increase text size container
function increaseFontSize() {
    var textElement = document.getElementById('increaseText');
    var currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
    var newSize = currentSize + 1; // Increase by 1px (you can change this value)
    textElement.style.fontSize = newSize + 'px';
    console.log("font size increased");
}
//call function
setInterval(increaseFontSize, 1000);


//call inputContainer function
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event){
    event.preventDefault();

    // Update the text content
    let displayText = document.getElementById('text-length');
    let inputText = document.getElementById("inputText").value;
    console.log(inputText.value);
    if(inputText != ""){
        displayText.innerText = document.getElementById("inputText").value;
        console.log("text submitted and replaced", inputText);

    }else if (inputText.value == "" || inputText.value == undefined){
        displayText.innerText = "No text submitted";
        console.log("No text submitted");

    }

}) 


