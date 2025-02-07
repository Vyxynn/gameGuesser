let data = [
    {name: ['Minecraft'], image: ['./assets/games/minecraft/image1.jpg', './assets/games/minecraft/image2.jpg', './assets/games/minecraft/image3.jpg', './assets/games/minecraft/image4.jpg', './assets/games/minecraft/image5.jpg']},
    {name: ['Tetris'], image: ['./assets/games/tetris/image1.jpg', './assets/games/tetris/image2.jpg', './assets/games/tetris/image3.jpg', './assets/games/tetris/image4.jpg', './assets/games/tetris/image5.jpg']},
    {name: ['Grand Theft Auto V', 'GTAV', 'Grand Theft Auto 5', 'GTA5', 'GTA Five', 'Grand Theft Auto Five'], image: ['./assets/games/gtav/image1.jpg', './assets/games/gtav/image2.jpg', './assets/games/gtav/image3.jpg', './assets/games/gtav/image4.jpg', './assets/games/gtav/image5.jpg']},
    {name: ['The Legend of Zelda: Ocarina of Time', 'Legend of Zelda: Ocarina of Time', 'Ocarina of Time', 'Zelda: Ocarina of Time'], image: ['./assets/games/tlozoot/image1.jpg', './assets/games/tlozoot/image2.jpg', './assets/games/tlozoot/image3.jpg', './assets/games/tlozoot/image4.jpg', './assets/games/tlozoot/image5.jpg']},
    {name: ['Super Mario Bros'], image: ['./assets/games/smb/image1.jpg', './assets/games/smb/image2.jpg', './assets/games/smb/image3.jpg', './assets/games/smb/image4.jpg', './assets/games/smb/image5.jpg']},
    {name: ['The Legend of Zelda: Breath of the Wild', 'Legend of Zelda: Breath of the Wild', 'Breath of the Wild', 'Zelda: Breath of the Wild'], image: ['./assets/games/tlozbotw/image1.jpg', './assets/games/tlozbotw/image2.jpg', './assets/games/tlozbotw/image3.jpg', './assets/games/tlozbotw/image4.jpg', './assets/games/tlozbotw/image5.jpg']},
    {name: ['Super Mario 64'], image: ['./assets/games/sm64/image1.jpg', './assets/games/sm64/image2.jpg', './assets/games/sm64/image3.jpg', './assets/games/sm64/image4.jpg', './assets/games/sm64/image5.jpg']},
    {name: ['The Witcher 3: Wild Hunt', 'Witcher 3: Wild Hunt', 'The Witcher 3', 'Witcher 3', 'Witcher Three', 'The Witcher Three', 'The Witcher Three: Wild Hunt', 'Witcher Three: Wild Hunt'], image: ['./assets/games/witcher3/image1.jpg', './assets/games/witcher3/image2.jpg', './assets/games/witcher3/image3.jpg', './assets/games/witcher3/image4.jpg', './assets/games/witcher3/image5.jpg']},
    {name: ['Half-Life 2', 'Half-Life Two'], image: ['./assets/games/halflife2/image1.jpg', './assets/games/halflife2/image2.jpg', './assets/games/halflife3/image1.jpg', './assets/games/halflife2/image4.jpg', './assets/games/halflife2/image5.jpg']},
    {name: ['The Elder Scrolls V: Skyrim', 'Elder Scrolls V: Skyrim', 'The Elder Scrolls Five: Skyrim', 'Elder Scrolls Five: Skyrim', 'Skyrim'], image: ['./assets/games/skyrim/image1.jpg', './assets/games/skyrim/image2.jpg', './assets/games/skyrim/image3.jpg', './assets/games/skyrim/image4.jpg', './assets/games/skyrim/image5.jpg']},
    {name: ['Red Dead Redemption 2', 'Red Dead Redemption Two'], image: ['./assets/games/rdr2/image1.jpg', './assets/games/rdr2/image2.jpg', './assets/games/rdr2/image3.jpg', './assets/games/rdr2/image4.jpg', './assets/games/rdr2/image5.jpg']},
    {name: ['The Last of Us', 'Last of Us'], image: ['./assets/games/lou/image1.jpg', './assets/games/lou/image2.jpg', './assets/games/lou/image3.jpg', './assets/games/lou/image4.jpg', './assets/games/lou/image5.jpg']},
    {name: ['Dark Souls'], image: ['./assets/games/darksouls/image1.jpg', './assets/games/darksouls/image2.jpg', './assets/games/darksouls/image3.jpg', './assets/games/darksouls/image4.jpg', './assets/games/darksouls/image5.jpg']},
    {name: ['Halo: Combat Evolved'], image: ['./assets/games/haloce/image1.jpg', './assets/games/haloce/image2.jpg', './assets/games/haloce/image3.jpg', './assets/games/haloce/image4.jpg', './assets/games/haloce/image5.jpg']},
    {name: ['Portal 2', 'Portal Two'], image: ['./assets/games/portal2/image1.jpg', './assets/games/portal2/image2.jpg', './assets/games/portal2/image3.jpg', './assets/games/portal2/image4.jpg', './assets/games/portal2/image5.jpg']},
    {name: ['Chrono Trigger'], image: ['./assets/games/chronotrigger/image1.jpg', './assets/games/chronotrigger/image2.jpg', './assets/games/chronotrigger/image3.jpg', './assets/games/chronotrigger/image4.jpg', './assets/games/chronotrigger/image5.jpg']},
    {name: ['Super Metroid'], image: ['./assets/games/supermetroid/image1.jpg', './assets/games/supermetroid/image2.jpg', './assets/games/supermetroid/image3.jpg', './assets/games/supermetroid/image4.jpg', './assets/games/supermetroid/image5.jpg']},
    {name: ['Final Fantasy VII', 'Final Fantasy 7', 'Final Fantasy Seven'], image: ['./assets/games/ff7/image1.jpg', './assets/games/ff7/image2.jpg', './assets/games/ff7/image3.jpg', './assets/games/ff7/image4.jpg', './assets/games/ff7/image5.jpg']},
    {name: ['Metal Gear Solid'], image: ['./assets/games/mgs/image1.jpg', './assets/games/mgs/image2.jpg', './assets/games/mgs/image3.jpg', './assets/games/mgs/image4.jpg', './assets/games/mgs/image5.jpg']},
    {name: ['BioShock'], image: ['./assets/games/bioshock/image1.jpg', './assets/games/bioshock/image2.jpg', './assets/games/bioshock/image3.jpg', './assets/games/bioshock/image4.jpg', './assets/games/bioshock/image5.jpg']},
    {name: ["Uncharted 4: A Thief's End", "Uncharted 4", "Uncharted Four", "Uncharted Four: A Theif's End", "Uncharted 4: Theif's End", "Uncharted Four: Theif's End"], image: ['./assets/games/uncharted4/image1.jpg', './assets/games/uncharted4/image2.jpg', './assets/games/uncharted4/image3.jpg', './assets/games/uncharted4/image4.jpg', './assets/games/uncharted4/image5.jpg']}
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
    chosenGame = rng(0, data.length-1);
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
        value = value.replace(/-/gi, '');
        value = value.replace(/'/gi, '');

        //Checks if the answer is correct for all given names
        for(i = 0; i < data[chosenGame].name.length; i++){
            let answer = data[chosenGame].name[i].toLowerCase();
            answer = answer.replace(/\s/g, '');
            answer = answer.replace(/:/gi, '');
            answer = answer.replace(/-/gi, '');
            answer = answer.replace(/'/gi, '');

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
  