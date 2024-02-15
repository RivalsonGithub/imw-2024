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

/*


*/
let conditionContainer = document.getElementById("conditionContainer");
let square = document.getElementById("square");
conditionContainer.addEventListener("mouseover", function(){
    square.style.backgroundColor = "lightgreen";
})
conditionContainer.addEventListener("mouseout", function(){
    square.style.backgroundColor = "lightsalmon";
})


let increaseText = document.getElementById("increaseText");




