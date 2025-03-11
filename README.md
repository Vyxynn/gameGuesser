# GAME GUESSER

## DESCRIPTION
A simple game where the player tries to guess the name of a game based on a series of images. The player has a limited number of guesses, and each incorrect guess unlocks a new hint image.

## HOW TO PLAY
1. Enter the name of the game in the input field
2. Click the "Submit" button or press Enter
3. Read the feedback to know if your guess was correct or incorrect
4. If incorrect, a new hint image will be unlocked
5. Use the left and right arrow buttons to navigate through the hint images
6. Keep guessing until you find the correct game name

## TECHNOLOGIES USED
- HTML5
- CSS3
- JavaScript

## FEATURES
- Random game selection
- Input validation
- Visual feedback
- Hint image navigation
- Score tracking

## PROJECT STRUCTURE
The project consists of three files:
- **index.html** - Contains the structure of the game
- **styles.css** - Contains the styling of the game
- **script.js** - Contains the game logic

## CODE EXAMPLE
```javascript
function checkAnswer() {
    const userGuess = inputArea.value.toLowerCase().replace(/\s|:|-|'/g, '');
    for (let i = 0; i < data[chosenGame].name.length; i++) {
        let answer = data[chosenGame].name[i].toLowerCase().replace(/\s|:|-|'/g, '');
        if (userGuess === answer) {
            guessFeedback.innerHTML = 'Correct';
            guessFeedback.style.color = 'green';
            totalScore += availiableScore;
            updateScreen();
            return;
        }
    }
    availiableScore--;
    guessFeedback.innerHTML = 'Incorrect';
    guessFeedback.style.color = 'red';
    unlockedHints++;
    currentImage++;
    updateScreen();
}
```

### Explanation of the `checkAnswer` Function

The `checkAnswer` function is designed to validate a user's guess against a list of possible correct answers and provide feedback accordingly. Here's a step-by-step breakdown of what the function does:

1. **Retrieve User Input**:
    ```javascript
    const userGuess = inputArea.value.toLowerCase().replace(/\s|:|-|'/g, '');
    ```
    - The function retrieves the user's guess from an input field (`inputArea`).
    - It converts the guess to lowercase and removes any spaces, colons, hyphens, and apostrophes to standardize the input.

2. **Loop Through Possible Answers**:
    ```javascript
    for (let i = 0; i < data[chosenGame].name.length; i++) {
        let answer = data[chosenGame].name[i].toLowerCase().replace(/\s|:|-|'/g, '');
    ```
    - The function iterates through an array of possible correct answers (`data[chosenGame].name`).
    - Each answer is also converted to lowercase and standardized by removing spaces, colons, hyphens, and apostrophes.

3. **Check for a Match**:
    ```javascript
    if (userGuess === answer) {
        guessFeedback.innerHTML = 'Correct';
        guessFeedback.style.color = 'green';
        totalScore += availiableScore;
        updateScreen();
        return;
    }
    ```
    - If the user's guess matches any of the possible answers, the function:
        - Updates the feedback element (`guessFeedback`) to display "Correct" in green.
        - Increases the total score by the available score (`availiableScore`).
        - Calls the `updateScreen` function to refresh the display.
        - Exits the function early using `return`.

4. **Handle Incorrect Guess**:
    ```javascript
    availiableScore--;
    guessFeedback.innerHTML = 'Incorrect';
    guessFeedback.style.color = 'red';
    unlockedHints++;
    currentImage++;
    updateScreen();
    ```
    - If no match is found after the loop, the function:
        - Decreases the available score by one.
        - Updates the feedback element to display "Incorrect" in red.
        - Increments the number of unlocked hints.
        - Advances to the next image.
        - Calls the `updateScreen` function to refresh the display.