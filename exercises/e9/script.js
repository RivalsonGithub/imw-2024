let size = 50;
let randomValue;
let mode = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(random(255), random(255), random(255));
    rectMode(CENTER);


    print("test");

}

function draw() {
    //ellipse(100,200, 50, 100);

    switch (mode) {
        case 0:
            if (mouseIsPressed) {
                randomValue = random(50, 100);
                fill(random(255), random(255), random(255));
                //rect(mouseX-randomValue/2, mouseY-randomValue/2, randomValue);
                rect(mouseX, mouseY, randomValue);
            }
            break;

        case 1:
            if (mouseIsPressed) {
                randomValue = random(50, 100);
                fill(random(255), random(255), random(255));
                //rect(mouseX-randomValue/2, mouseY-randomValue/2, randomValue);
                circle(mouseX, mouseY, randomValue);
            }
            break;

        case 2:
            if (mouseIsPressed) {
                randomValue = random(50, 100);
                fill(random(255), random(255), random(255));
                //rect(mouseX-randomValue/2, mouseY-randomValue/2, randomValue);
                circle(mouseX, mouseY, randomValue);
            }
            break;
    }

}


function keyPressed() {
    print(keyCode)
    if (keyCode == 82) {
        setup();
        print("r pressed");
    }
    if (keyCode == 84) {
        mode = 0;
        print("t pressed");
    }

    if (keyCode == 89) {
        mode = 1;
        print("y pressed");
    }
    if (keyCode == 85) {
        mode = 2;
        print("u pressed");
    }

}