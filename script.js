let data = [
    {name: 'Minecraft', image: ['./assets/games/minecraft/image1.jpg', './assets/games/minecraft/image2.jpg', './assets/games/minecraft/image3.jpg', './assets/games/minecraft/image4.jpg', './assets/games/minecraft/image5.jpg']},
    {name: 'Tetris', image: ['./assets/games/tetris/image1.jpg', './assets/games/tetris/image2.jpg', './assets/games/tetris/image3.jpg', './assets/games/tetris/image4.jpg', './assets/games/tetris/image5.jpg']},
    {name: 'Grand Theft Auto V', image: ['./assets/games/gtav/image1.jpg', './assets/games/gtav/image2.jpg', './assets/games/gtav/image3.jpg', './assets/games/gtav/image4.jpg', './assets/games/gtav/image5.jpg']},
    {name: 'The Legend of Zelda: Ocarina of Time', image: ['./assets/games/tlozoot/image1.jpg', './assets/games/tlozoot/image2.jpg', './assets/games/tlozoot/image3.jpg', './assets/games/tlozoot/image4.jpg', './assets/games/tlozoot/image5.jpg']},
    {name: 'Super Mario Bros', image: ['./assets/games/smb/image1.jpg', './assets/games/smb/image2.jpg', './assets/games/smb/image3.jpg', './assets/games/smb/image4.jpg', './assets/games/smb/image5.jpg']}
];
let chosenGame;
let unlockedHints = 1;
let photoHTML = "";
let photo = document.getElementById('photo');
let totalScore = 0;
let availiableScore = 5;


function startGame(){
    console.log('Game Started');
    chosenGame = rng(0, data.length-1);
    console.log(chosenGame);
    unlockedHints = 1;
    availiableScore = 5;
    
    photoHTML = `
    <img src="${data[chosenGame].image[0]}">
    `;
    photo.innerHTML = photoHTML;
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  