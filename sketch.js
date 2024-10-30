let headImages = [];
let bodyImages = [];
let leftArmImages = [];
let rightArmImages = [];
let legImages = [];

let currentHead, currentBody, currentLeftArm, currentRightArm, currentLeg;

// starting size
let headX = 250;
let headY = 10; 

let headSize = 200;
let bodySize = 150; 
let leftArmSize = 200; 
let rightArmSize = 200;
let legSize = 200;

function preload() {
    headImages.push(loadImage('images/head1.png'));
    headImages.push(loadImage('images/head2.png'));
    headImages.push(loadImage('images/head3.png'));

    bodyImages.push(loadImage('images/body1.png'));
    bodyImages.push(loadImage('images/body2.png'));

    rightArmImages.push(loadImage('images/right1.png'));
    rightArmImages.push(loadImage('images/right2.png'));

    leftArmImages.push(loadImage('images/left1.png'));
    leftArmImages.push(loadImage('images/left2.png'));

    legImages.push(loadImage('images/leg1.png'));
    legImages.push(loadImage('images/leg2.png'));
    legImages.push(loadImage('images/leg3.png'));
}

function setup() {
    createCanvas(700, 700);

    let headButton = createButton('Head');
    headButton.position(100, 650);
    headButton.mousePressed(changeHead);

    let bodyButton = createButton('Body');
    bodyButton.position(200, 650);
    bodyButton.mousePressed(changeBody);

    let leftArmButton = createButton('Left Arm');
    leftArmButton.position(300, 650);
    leftArmButton.mousePressed(changeLeftArm);

    let rightArmButton = createButton('Right Arm');
    rightArmButton.position(400, 650);
    rightArmButton.mousePressed(changeRightArm);

    let legButton = createButton('Legs');
    legButton.position(500, 650);
    legButton.mousePressed(changeLeg);

    changeHead();
    changeBody();
    changeLeftArm();
    changeRightArm();
    changeLeg();
}

function draw() {
    background(255);

    if (currentHead) {
        image(currentHead, headX, headY, headSize, headSize);
    }
 
    if (currentLeftArm) {
        image(currentLeftArm, 420, 110, leftArmSize, leftArmSize);
    }

    if (currentRightArm) {
        if (currentRightArm === rightArmImages[0]) { 
            image(currentRightArm, 70, 200, rightArmSize, rightArmSize); 
        } else if (currentRightArm === rightArmImages[1]) { 
            image(currentRightArm, 70, 100, rightArmSize, rightArmSize); 
        }
    }
    
    if (currentBody) {
        image(currentBody, 270, 200, bodySize, bodySize * 1.5); 
    }

    if (currentLeg) {
        image(currentLeg, 240, 400, legSize, legSize);
    }
}

function changeHead() {
    currentHead = random(headImages);
    updateHeadPosition(); 
}

function changeBody() {
    currentBody = random(bodyImages);
}

function changeLeftArm() {
    currentLeftArm = random(leftArmImages);
}

function changeRightArm() {
    currentRightArm = random(rightArmImages);
}

function changeLeg() {
    currentLeg = random(legImages);
}

function updateHeadPosition() {
    if (currentHead === headImages[0]) {
        headY = 2; 
    } else if (currentHead === headImages[1]) {
        headY = 70; 
    } else if (currentHead === headImages[2]) {
        headY = 20;
    }
}
