# MOD1_final_project
### Rock, paper, scissors

## Objective
    - Build a Rock Paper Scissors game from scratch!
    - Solidify and demonstrate your understanding of:
        - DRY JavaScript
        - event delegation to handle similar event listeners
    - Understand the difference between the data model and how the data is displayed on the DOM

## Illustrated Design Mock-Up
<img width="300" alt="On page load" src="https://user-images.githubusercontent.com/100659793/173704612-b5a19138-aef5-4076-960c-52dd847cf82c.png">
<img width="300" alt="Gameboard Mock-up" src="https://user-images.githubusercontent.com/100659793/173704762-10982cc8-5031-4cc4-9f9d-81a5cb3901fe.png">

## Guided Motion Feature
https://user-images.githubusercontent.com/100659793/173706271-853a4387-2f5a-439c-a7ef-f1fa5a472313.mov

## Technologies
  - Javascript
  - HTML
  - CSS

## Features
- On Game Select Page
 - Two boxes for "Classic Game" and "Difficult"
  - When user hovers over the boxes the game pieces and rules appear for their respective games.
- On "Classic Game" Selection user assigned left side of the board, computer assigned to right side.  
  - If "Difficult" game was not already clicked on -> Player prompted to update their player name from "Human" and to change avatar.  Completely optional.  Will assign Human user name and token by default.  Only asked this once per game.  Need to reset game if you want to change name or avatar.  
  - Score board appears
  - Change game option appears
    - After left player makes a selection the computer makes a selection and the game determines a winner.  Adding points to the scoreboard.
    - No score is added on tie.
    - Option to "End Game and Clear Score" appears.  
- On "Difficult" game Selection user assigned left side of the board, computer assigned to right side.  
  - If "Classic Game" was not already clicked on -> Player prompted to update their player name from "Human" and to change avatar.  Completely optional.  Will assign Human user name and token by default.  Only asked this once per game.  Need to reset game if player wants to change name or avatar.  
  - Score board appears
    - Change game option appears
      - After left player makes a selection the computer makes a selection and the game determines a winner.  Adding points to the scoreboard.
      - No score is added on tie.  
      - Option to "End Game and Clear Score" appears.  

- Player can exit Difficult game and play classic game (and vice versa) without resetting score.  Player can "End Game and Clear Score"       


## Possible Future Extensions
Extension - Persist Player data using local storage (number of wins should persist across page refreshes)
- Add save wins to local storage
- Add retrieve wins from local storage

Ability to update avatar and name once game has begun.

## Set Up
1. Fork this repo  
2. Clone the repo to your local machine
3. View the project in the browser by running open index.html in your terminal.

## Sources
 - [MDN](http://developer.mozilla.org/en-US/)
 -[StackOverflow](https://stackoverflow.com/)
 - [W3Schools](https://www.w3schools.com/)

## Contributors
- [GitHub Edward Rodriguez](https://github.com/edjrodriguez)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo-v2.html)
