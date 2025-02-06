let data = [
    {name: ['Minecraft'], image: ['./assets/games/minecraft/image1.jpg', './assets/games/minecraft/image2.jpg', './assets/games/minecraft/image3.jpg', './assets/games/minecraft/image4.jpg', './assets/games/minecraft/image5.jpg']},
    {name: ['Tetris'], image: ['./assets/games/tetris/image1.jpg', './assets/games/tetris/image2.jpg', './assets/games/tetris/image3.jpg', './assets/games/tetris/image4.jpg', './assets/games/tetris/image5.jpg']},
    {name: ['Grand Theft Auto V', 'GTAV', 'Grand Theft Auto 5', 'GTA5', 'GTA Five', 'Grand Theft Auto Five'], image: ['./assets/games/gtav/image1.jpg', './assets/games/gtav/image2.jpg', './assets/games/gtav/image3.jpg', './assets/games/gtav/image4.jpg', './assets/games/gtav/image5.jpg']},
    {name: ['The Legend of Zelda: Ocarina of Time', 'Legend of Zelda: Ocarina of Time', 'Ocarina of Time'], image: ['./assets/games/tlozoot/image1.jpg', './assets/games/tlozoot/image2.jpg', './assets/games/tlozoot/image3.jpg', './assets/games/tlozoot/image4.jpg', './assets/games/tlozoot/image5.jpg']},
    {name: ['Super Mario Bros'], image: ['./assets/games/smb/image1.jpg', './assets/games/smb/image2.jpg', './assets/games/smb/image3.jpg', './assets/games/smb/image4.jpg', './assets/games/smb/image5.jpg']}
];
const photo = document.getElementById('photo');
const inputArea = document.getElementById('submitArea');
const button = [
    document.getElementById('button0'), document.getElementById('button1'), document.getElementById('button2'), document.getElementById('button3'), document.getElementById('button4')
];
let chosenGame;
let unlockedHints = 0; //Max 4
let photoHTML = "";
let totalScore = 0;
let availiableScore = 5; //Goes down per incorrect guess, when it goes down, increase unlocked hints by 1
let currentImage = 0;

//Only run when site loads
function startGame(){
    console.log('Game Started');
    // chosenGame = rng(0, data.length-1);
    chosenGame = 2;
    console.log('Chosen Game:', data[chosenGame].name);
    unlockedHints = 0;
    availiableScore = 5;
    
    updateScreen();
}

//Checks what button (left or right) is pressed, changes the image, then updates the screen
function changeImage(side){
    console.log(side);
    if(side === 'right'){
        if(currentImage < unlockedHints){
            currentImage++;
            updateScreen();

        }

    }else if(side === 'left'){
        if(currentImage - 1 != -1){
            currentImage--;
            updateScreen();
        }
    }
}

function updateScreen(){
    //Set temporary variables
    

    //Update image display
    photoHTML = `
    <img src="${data[chosenGame].image[currentImage]}">
    `;
    photo.innerHTML = photoHTML;

    //Update image selector
    //if image is unlocked, change the color to green, else, change it to red
    for(i = 0; i < 5; i++){
        if(unlockedHints >= button.indexOf(document.getElementById(`button${i}`))){
            button[i].style.color = 'green';
        }else{
            button[i].style.color = 'red';
        }
    }
    //change the color of the current image to dark green
    button[currentImage].style.color = 'darkgreen';
}

function checkAnswer(){
    //Check if user inputed an answer
    if(inputArea.value != ''){
        let value = inputArea.value.toLowerCase();

        value = value.replace(/\s/g, '');
        value = value.replace(/:/gi, '');

        //Checks if the answer is correct for all given names
        for(i = 0; i < data[chosenGame].name.length; i++){
            let answer = data[chosenGame].name[i].toLowerCase();
            answer = answer.replace(/\s/g, '');
            answer = answer.replace(/:/gi, '');

            console.log('Answer:', answer);
            
            //Look for the answer
            if(value == answer){
                console.log('Correct');
                inputArea.value = '';
    
                totalScore += availiableScore;
                console.log('New Score:', totalScore);
                chosenGame = rng(0, data.length-1);
                console.log('Chosen Game:', data[chosenGame].name);
                unlockedHints = 0;
                currentImage = 0;
                availiableScore = 5;
                updateScreen();
                return;
            }
            
        }
        //If the answer is not found in the names array, run the incorrect code
        console.log('Incorrect');
        console.log('Unlocked Hints:', unlockedHints);
        if(unlockedHints == 4){
            console.log('Max hints');
            inputArea.value = '';
            chosenGame = rng(0, data.length-1);
            console.log('Chosen Game:', data[chosenGame].name);
            unlockedHints = 0;
            currentImage = 0;
            availiableScore = 5;
        }else{
            unlockedHints++;
            currentImage++;
        }
        updateScreen();
    }
}

//Make the submit button be pressed when the user clicks enter
inputArea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("submitButton").click();
    }
  }); 

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  