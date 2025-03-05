let data = [
    {name: ['Minecraft', 'MC'], image: ['./assets/games/minecraft/image1.jpg', './assets/games/minecraft/image2.jpg', './assets/games/minecraft/image3.jpg', './assets/games/minecraft/image4.jpg', './assets/games/minecraft/image5.jpg']},

    {name: ['Tetris'], image: ['./assets/games/tetris/image1.jpg', './assets/games/tetris/image2.jpg', './assets/games/tetris/image3.jpg', './assets/games/tetris/image4.jpg', './assets/games/tetris/image5.jpg']},

    {name: ['Grand Theft Auto V', 'GTAV', 'Grand Theft Auto 5', 'GTA5', 'GTA Five', 'Grand Theft Auto Five'], image: ['./assets/games/gtav/image1.jpg', './assets/games/gtav/image2.jpg', './assets/games/gtav/image3.jpg', './assets/games/gtav/image4.jpg', './assets/games/gtav/image5.jpg']},

    {name: ['The Legend of Zelda: Ocarina of Time', 'Legend of Zelda: Ocarina of Time', 'Ocarina of Time', 'Zelda: Ocarina of Time', 'OOT', 'TLoZ OOT'], image: ['./assets/games/tlozoot/image1.jpg', './assets/games/tlozoot/image2.jpg', './assets/games/tlozoot/image3.jpg', './assets/games/tlozoot/image4.jpg', './assets/games/tlozoot/image5.jpg']},

    {name: ['Super Mario Bros', 'SMB'], image: ['./assets/games/smb/image1.jpg', './assets/games/smb/image2.jpg', './assets/games/smb/image3.jpg', './assets/games/smb/image4.jpg', './assets/games/smb/image5.jpg']},

    {name: ['The Legend of Zelda: Breath of the Wild', 'Legend of Zelda: Breath of the Wild', 'Breath of the Wild', 'Zelda: Breath of the Wild', 'BOTW', 'TLoZ BOTW'], image: ['./assets/games/tlozbotw/image1.jpg', './assets/games/tlozbotw/image2.jpg', './assets/games/tlozbotw/image3.jpg', './assets/games/tlozbotw/image4.jpg', './assets/games/tlozbotw/image5.jpg']},

    {name: ['Super Mario 64', 'SM64'], image: ['./assets/games/sm64/image1.jpg', './assets/games/sm64/image2.jpg', './assets/games/sm64/image3.jpg', './assets/games/sm64/image4.jpg', './assets/games/sm64/image5.jpg']},

    {name: ['The Witcher 3: Wild Hunt', 'Witcher 3: Wild Hunt', 'The Witcher 3', 'Witcher 3', 'Witcher Three', 'The Witcher Three', 'The Witcher Three: Wild Hunt', 'Witcher Three: Wild Hunt', 'W3', 'W3WH', 'W3TWH'], image: ['./assets/games/witcher3/image1.jpg', './assets/games/witcher3/image2.jpg', './assets/games/witcher3/image3.jpg', './assets/games/witcher3/image4.jpg', './assets/games/witcher3/image5.jpg']},

    {name: ['Half-Life 2', 'Half-Life Two', 'HL2', 'HL Two'], image: ['./assets/games/halflife2/image1.jpg', './assets/games/halflife2/image2.jpg', './assets/games/halflife3/image1.jpg', './assets/games/halflife2/image4.jpg', './assets/games/halflife2/image5.jpg']},

    {name: ['The Elder Scrolls V: Skyrim', 'Elder Scrolls V: Skyrim', 'The Elder Scrolls Five: Skyrim', 'Elder Scrolls Five: Skyrim', 'Skyrim'], image: ['./assets/games/skyrim/image1.jpg', './assets/games/skyrim/image2.jpg', './assets/games/skyrim/image3.jpg', './assets/games/skyrim/image4.jpg', './assets/games/skyrim/image5.jpg']},

    {name: ['Red Dead Redemption 2', 'Red Dead Redemption Two', 'RDR2'], image: ['./assets/games/rdr2/image1.jpg', './assets/games/rdr2/image2.jpg', './assets/games/rdr2/image3.jpg', './assets/games/rdr2/image4.jpg', './assets/games/rdr2/image5.jpg']},

    {name: ['The Last of Us', 'Last of Us', 'TLOU'], image: ['./assets/games/lou/image1.jpg', './assets/games/lou/image2.jpg', './assets/games/lou/image3.jpg', './assets/games/lou/image4.jpg', './assets/games/lou/image5.jpg']},

    {name: ['Dark Souls', 'DS'], image: ['./assets/games/darksouls/image1.jpg', './assets/games/darksouls/image2.jpg', './assets/games/darksouls/image3.jpg', './assets/games/darksouls/image4.jpg', './assets/games/darksouls/image5.jpg']},

    {name: ['Halo: Combat Evolved', 'Halo: CE', 'HCE'], image: ['./assets/games/haloce/image1.jpg', './assets/games/haloce/image2.jpg', './assets/games/haloce/image3.jpg', './assets/games/haloce/image4.jpg', './assets/games/haloce/image5.jpg']},

    {name: ['Portal 2', 'Portal Two', 'P2'], image: ['./assets/games/portal2/image1.jpg', './assets/games/portal2/image2.jpg', './assets/games/portal2/image3.jpg', './assets/games/portal2/image4.jpg', './assets/games/portal2/image5.jpg']},

    {name: ['Chrono Trigger', 'CT'], image: ['./assets/games/chronotrigger/image1.jpg', './assets/games/chronotrigger/image2.jpg', './assets/games/chronotrigger/image3.jpg', './assets/games/chronotrigger/image4.jpg', './assets/games/chronotrigger/image5.jpg']},

    {name: ['Super Metroid', 'SM'], image: ['./assets/games/supermetroid/image1.jpg', './assets/games/supermetroid/image2.jpg', './assets/games/supermetroid/image3.jpg', './assets/games/supermetroid/image4.jpg', './assets/games/supermetroid/image5.jpg']},

    {name: ['Final Fantasy VII', 'Final Fantasy 7', 'Final Fantasy Seven', 'FF7', 'FF Seven', 'FF VII'], image: ['./assets/games/ff7/image1.jpg', './assets/games/ff7/image2.jpg', './assets/games/ff7/image3.jpg', './assets/games/ff7/image4.jpg', './assets/games/ff7/image5.jpg']},

    {name: ['Metal Gear Solid', 'MGS'], image: ['./assets/games/mgs/image1.jpg', './assets/games/mgs/image2.jpg', './assets/games/mgs/image3.jpg', './assets/games/mgs/image4.jpg', './assets/games/mgs/image5.jpg']},

    {name: ['BioShock', 'BS'], image: ['./assets/games/bioshock/image1.jpg', './assets/games/bioshock/image2.jpg', './assets/games/bioshock/image3.jpg', './assets/games/bioshock/image4.jpg', './assets/games/bioshock/image5.jpg']},

    {name: ["Uncharted 4: A Thief's End", "Uncharted 4", "Uncharted Four", "Uncharted Four: A Thief's End", "Uncharted 4: Theif's End", "Uncharted Four: Theif's End", 'U4', 'U4TE', 'U4ATE'], image: ['./assets/games/uncharted4/image1.jpg', './assets/games/uncharted4/image2.jpg', './assets/games/uncharted4/image3.jpg', './assets/games/uncharted4/image4.jpg', './assets/games/uncharted4/image5.jpg']},

    {name: ['Grand Theft Auto: San Andreas', 'GTA: San Andreas', 'San Andreas', 'GTA SA'], image: ['./assets/games/gtasa/image1.jpg', './assets/games/gtasa/image2.jpg', './assets/games/gtasa/image3.jpg', './assets/games/gtasa/image4.jpg', './assets/games/gtasa/image5.jpg']},

    {name: ['Super Mario World', 'SM World', 'SMW'], image: ['./assets/games/smworld/image1.jpg', './assets/games/smworld/image2.jpg', './assets/games/smworld/image3.jpg', './assets/games/smworld/image4.jpg', './assets/games/smworld/image5.jpg']},

    {name: ['Sekiro: Shadows Die Twice', 'Sekiro', 'SSDT'], image: ['./assets/games/sekiro/image1.jpg', './assets/games/sekiro/image2.jpg', './assets/games/sekiro/image3.jpg', './assets/games/sekiro/image4.jpg', './assets/games/sekiro/image5.jpg']},

    {name: ['DOOM (1993)', 'DOOM'], image: ['./assets/games/doom/image1.jpg', './assets/games/doom/image2.jpg', './assets/games/doom/image3.jpg', './assets/games/doom/image4.jpg', './assets/games/doom/image5.jpg']},

    {name: ['Resident Evil 4', 'RE4', 'Resident Evil Four', 'RE Four'], image: ['./assets/games/re4/image1.jpg', './assets/games/re4/image2.jpg', './assets/games/re4/image3.jpg', './assets/games/re4/image4.jpg', './assets/games/re4/image5.jpg']},

    {name : ['Mass Effect 2', 'ME2', 'Mass Effect Two', 'ME Two'], image: ['./assets/games/me2/image1.jpg', './assets/games/me2/image2.jpg', './assets/games/me2/image3.jpg', './assets/games/me2/image4.jpg', './assets/games/me2/image5.jpg']},

    {name: ['The Legend of Zelda: A Link to the Past', 'Legend of Zelda: A Link to the Past', 'A Link to the Past', 'Link to the Past', 'LttP', 'TLoZ LttP'], image: ['./assets/games/lttp/image1.jpg', './assets/games/lttp/image2.jpg', './assets/games/lttp/image3.jpg', './assets/games/lttp/image4.jpg', './assets/games/lttp/image5.jpg']},

    {name: ['Persona 5', 'Persona Five', 'P5'], image: ['./assets/games/persona5/image1.jpg', './assets/games/persona5/image2.jpg', './assets/games/persona5/image3.jpg', './assets/games/persona5/image4.jpg', './assets/games/persona5/image5.jpg']},

    {name: ['Bloodborne', 'BB'], image: ['./assets/games/bloodborne/image1.jpg', './assets/games/bloodborne/image2.jpg', './assets/games/bloodborne/image3.jpg', './assets/games/bloodborne/image4.jpg', './assets/games/bloodborne/image5.jpg']},

    {name: ['Hollow Knight', 'HK'], image: ['./assets/games/hollowknight/image1.jpg', './assets/games/hollowknight/image2.jpg', './assets/games/hollowknight/image3.jpg', './assets/games/hollowknight/image4.jpg', './assets/games/hollowknight/image5.jpg']},

    {name: ['Overwatch', 'OW', 'Overwatch 2', 'Overwatch Two', 'OW2', 'OW Two'], image: ['./assets/games/ow/image1.jpg', './assets/games/ow/image2.jpg', './assets/games/ow/image3.jpg', './assets/games/ow/image4.jpg', './assets/games/ow/image5.jpg']},

    {name: ['Minecraft: Story Mode', 'MC: Story Mode', 'MCSM'], image: ['./assets/games/mcsm/image1.jpg', './assets/games/mcsm/image2.jpg', './assets/games/mcsm/image3.jpg', './assets/games/mcsm/image4.jpg', './assets/games/mcsm/image5.jpg']},

    {name: ['Super Smash Bros. Ultimate', 'Smash Ultimate', 'SSBU'], image: ['./assets/games/smbu/image1.jpg', './assets/games/smbu/image2.jpg', './assets/games/smbu/image3.jpg', './assets/games/smbu/image4.jpg', './assets/games/smbu/image5.jpg']},

    {name: ['The Sims', 'Sims'], image: ['./assets/games/sims/image1.jpg', './assets/games/sims/image2.jpg', './assets/games/sims/image3.jpg', './assets/games/sims/image4.jpg', './assets/games/sims/image5.jpg']},

    {name: ['EarthBound', 'Mother'], image: ['./assets/games/earthbound/image1.jpg', './assets/games/earthbound/image2.jpg', './assets/games/earthbound/image3.jpg', './assets/games/earthbound/image4.jpg', './assets/games/earthbound/image5.jpg']},

    {name: ['Castlevania: Symphony of the Night', 'Castlevania: SotN', 'Castlevania: Symphony of Night', 'Castlevania: Symphony Night', 'Castlevania: SotN', 'Castlevania: Symphony Night', 'CSotN', 'SotN'], image: ['./assets/games/csn/image1.jpg', './assets/games/csn/image2.jpg', './assets/games/csn/image3.jpg', './assets/games/csn/image4.jpg', './assets/games/csn/image5.jpg']},

    {name: ['Super Mario Odyssey', 'SM Odyssey', 'SMO'], image: ['./assets/games/smo/image1.jpg', './assets/games/smo/image2.jpg', './assets/games/smo/image3.jpg', './assets/games/smo/image4.jpg', './assets/games/smo/image5.jpg']},

    {name: ['Street Fighter II', 'Street Fighter 2', 'SFII', 'SF2'], image: ['./assets/games/sf2/image1.jpg', './assets/games/sf2/image2.jpg', './assets/games/sf2/image3.jpg', './assets/games/sf2/image4.jpg', './assets/games/sf2/image5.jpg']},

    {name: ['Bioshock Infinite', 'BSI'], image: ['./assets/games/bsi/image1.jpg', './assets/games/bsi/image2.jpg', './assets/games/bsi/image3.jpg', './assets/games/bsi/image4.jpg', './assets/games/bsi/image5.jpg']},

    {name: ['Final Fantasy X', 'Final Fantasy 10', 'Final Fantasy Ten', 'FFX', 'FF Ten', 'FF 10'], image: ['./assets/games/ffx/image1.jpg', './assets/games/ffx/image2.jpg', './assets/games/ffx/image3.jpg', './assets/games/ffx/image4.jpg', './assets/games/ffx/image5.jpg']},

    {name: ['The Last of Us Part II', 'Last of Us Part II', 'TLOU2', 'LOU2'], image: ['./assets/games/lou2/image1.jpg', './assets/games/lou2/image2.jpg', './assets/games/lou2/image3.jpg', './assets/games/lou2/image4.jpg', './assets/games/lou2/image5.jpg']},

    {name: ['Spelunky 2', 'Spelunky Two', 'S2'], image: ['./assets/games/spelunky2/image1.jpg', './assets/games/spelunky2/image2.jpg', './assets/games/spelunky2/image3.jpg', './assets/games/spelunky2/image4.jpg', './assets/games/spelunky2/image5.jpg']},

    {name: ['Spelunky', 'S1'], image: ['./assets/games/spelunky/image1.jpg', './assets/games/spelunky/image2.jpg', './assets/games/spelunky/image3.jpg', './assets/games/spelunky/image4.jpg', './assets/games/spelunky/image5.jpg']},

    {name: ['Metroid Prime', 'MP', 'MP1'], image: ['./assets/games/metroidprime/image1.jpg', './assets/games/metroidprime/image2.jpg', './assets/games/metroidprime/image3.jpg', './assets/games/metroidprime/image4.jpg', './assets/games/metroidprime/image5.jpg']},

    {name: ['Civilization VI', 'Civilization 6', 'Civ VI', 'Civ 6'], image: ['./assets/games/civ6/image1.jpg', './assets/games/civ6/image2.jpg', './assets/games/civ6/image3.jpg', './assets/games/civ6/image4.jpg', './assets/games/civ6/image5.jpg']},

    {name: ['Red Dead Redemption', 'Red Dead Redemption One', 'RDR', 'RDR1'], image: ['./assets/games/rdr/image1.jpg', './assets/games/rdr/image2.jpg', './assets/games/rdr/image3.jpg', './assets/games/rdr/image4.jpg', './assets/games/rdr/image5.jpg']},

    {name: ['StarCraft II', 'StarCraft 2', 'SCII', 'SC2'], image: ['./assets/games/starcraft2/image1.jpg', './assets/games/starcraft2/image2.jpg', './assets/games/starcraft2/image3.jpg', './assets/games/starcraft2/image4.jpg', './assets/games/starcraft2/image5.jpg']},

    {name: ['Worms Armageddon', 'Worms: Armageddon', 'WA'], image: ['./assets/games/wormsarma/image1.jpg', './assets/games/wormsarma/image2.jpg', './assets/games/wormsarma/image3.jpg', './assets/games/wormsarma/image4.jpg', './assets/games/wormsarma/image5.jpg']},

    {name: ['Dark Souls III', 'Dark Souls 3', 'DS3', 'DS Three'], image: ['./assets/games/ds3/image1.jpg', './assets/games/ds3/image2.jpg', './assets/games/ds3/image3.jpg', './assets/games/ds3/image4.jpg', './assets/games/ds3/image5.jpg']},

    {name: ['Counter-Strike: Global Offensive', 'Counter-Strike: GO', 'CS: GO', 'CS:GO', 'CSGO'], image: ['./assets/games/csgo/image1.jpg', './assets/games/csgo/image2.jpg', './assets/games/csgo/image3.jpg', './assets/games/csgo/image4.jpg', './assets/games/csgo/image5.jpg']},

    {name: ['Fallout: New Vegas', 'Fallout New Vegas', 'Fallout: NV', 'Fallout NV', 'FNV'], image: ['./assets/games/falloutnv/image1.jpg', './assets/games/falloutnv/image2.jpg', './assets/games/falloutnv/image3.jpg', './assets/games/falloutnv/image4.jpg', './assets/games/falloutnv/image5.jpg']},

    {name: ['Hitman 2 (2018)', 'Hitman 2', 'Hitman Two', 'Hitman 2 (2018)', 'Hitman Two (2018)', 'H2'], image: ['./assets/games/hitman2/image1.jpg', './assets/games/hitman2/image2.jpg', './assets/games/hitman2/image3.jpg', './assets/games/hitman2/image4.jpg', './assets/games/hitman2/image5.jpg']},

    {name: ['The Witcher 2: Assassins of Kings', 'Witcher 2: Assassins of Kings', 'The Witcher Two: Assassins of Kings', 'Witcher Two: Assassins of Kings', 'W2', 'W2AOK', 'W2TWOAK', 'Witcher 2', 'The Witcher 2'], image: ['./assets/games/witcher2/image1.jpg', './assets/games/witcher2/image2.jpg', './assets/games/witcher2/image3.jpg', './assets/games/witcher2/image4.jpg', './assets/games/witcher2/image5.jpg']},

    {name: ['Diablo II', 'Diablo 2', 'D2', 'D Two'], image: ['./assets/games/diablo2/image1.jpg', './assets/games/diablo2/image2.jpg', './assets/games/diablo2/image3.jpg', './assets/games/diablo2/image4.jpg', './assets/games/diablo2/image5.jpg']},

    {name: ['Fortnite', 'FN'], image: ['./assets/games/fortnite/image1.jpg', './assets/games/fortnite/image2.jpg', './assets/games/fortnite/image3.jpg', './assets/games/fortnite/image4.jpg', './assets/games/fortnite/image5.jpg']},

    {name: ['Journey'], image: ['./assets/games/journey/image1.jpg', './assets/games/journey/image2.jpg', './assets/games/journey/image3.jpg', './assets/games/journey/image4.jpg', './assets/games/journey/image5.jpg']},

    {name: ['Minecraft Dungeons', 'MC Dungeons', 'MCD'], image: ['./assets/games/mcd/image1.jpg', './assets/games/mcd/image2.jpg', './assets/games/mcd/image3.jpg', './assets/games/mcd/image4.jpg', './assets/games/mcd/image5.jpg']},

    {name: ['Call of Duty: Modern Warfare', 'Call of Duty: MW', 'CoD: MW', 'CoD: Modern Warfare', 'CoD: MW (2019)', 'CoD: Modern Warfare (2019)', 'CoD: MW 2019', 'CoD: Modern Warfare 2019'], image: ['./assets/games/codmw/image1.jpg', './assets/games/codmw/image2.jpg', './assets/games/codmw/image3.jpg', './assets/games/codmw/image4.jpg', './assets/games/codmw/image5.jpg']},

    {name: ['Gears of War', 'GoW'], image: ['./assets/games/gow/image1.jpg', './assets/games/gow/image2.jpg', './assets/games/gow/image3.jpg', './assets/games/gow/image4.jpg', './assets/games/gow/image5.jpg']}
];

const photo = document.getElementById('photo');
const inputArea = document.getElementById('submitArea');
const button = [
    document.getElementById('button0'), document.getElementById('button1'), document.getElementById('button2'), document.getElementById('button3'), document.getElementById('button4')
];
const rules = document.getElementById('rulesHide');
const guessFeedback = document.getElementById('guessFeedback');
const lastGame = document.getElementById('lastGame');
const scoreContainer = document.getElementById('score');
const guessesLeftContainer = document.getElementById('guessesLeft');

let chosenGame;
let unlockedHints = 0; //Max 4
let photoHTML = "";
let totalScore = 0;
let availiableScore = 5; //Goes down per incorrect guess, when it goes down, increase unlocked hints by 1
let currentImage = 0;
let firstrun = true;

//Only run when site loads
function startGame(){
    chosenGame = rng(0, data.length-1);
    unlockedHints = 0;
    availiableScore = 5;
    
    updateScreen();
}

//Checks what button (left or right) is pressed, changes the image, then updates the screen
function changeImage(side){
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

function updateScreen() {
    // Update image display
    console.log('Updated Screen');
    photoHTML = `
    <img src="${data[chosenGame].image[currentImage]}" style="width: auto; height: 350px;">
    `;
    photo.innerHTML = photoHTML;
    scoreContainer.innerHTML = totalScore;

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

    //Update the Image Desc
    guessesLeftContainer.innerHTML = availiableScore;
}

function checkAnswer(){
    //Check if user inputed an answer
    if(inputArea.value != ''){
        rules.style.display = 'none';
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
            
            //Look for the answer
            if(value == answer){
                lastGame.innerHTML = data[chosenGame].name[0];
                lastGameCheck = data[chosenGame].name[0];

                guessFeedback.innerHTML = 'Correct';
                guessFeedback.style.color = 'green';
                scoreContainer.innerHTML = totalScore;

                inputArea.value = '';
                totalScore += availiableScore;
                chosenGame = rng(0, data.length-1);

                while(lastGameCheck == data[chosenGame].name[0]){
                    chosenGame = rng(0, data.length-1);
                }

                unlockedHints = 0;
                currentImage = 0;
                availiableScore = 5;

                updateScreen();
                return;
            }
            
        }
        //If the answer is not found in the names array, run the incorrect code
        availiableScore--;

        guessFeedback.innerHTML = 'Incorrect';
        guessFeedback.style.color = 'red';

        if(unlockedHints == 4){
            inputArea.value = '';

            lastGame.innerHTML = data[chosenGame].name[0];
            lastGameCheck = data[chosenGame].name[0];

            while(lastGame == data[chosenGame].name[0]){
                chosenGame = rng(0, data.length-1);
            }


            chosenGame = rng(0, data.length-1);
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