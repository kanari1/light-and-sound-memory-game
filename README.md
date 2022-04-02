# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Katrina Jang**

Time spent: **12** hours spent in total

Link to project: 
https://glitch.com/edit/#!/mire-chambray-rotate 

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/Re0mnsn.gif)
![](https://i.imgur.com/V9iVhnr.gif)
![](https://i.imgur.com/hPmePDp.gif)



## Reflection Questions

## 1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Outside resources that I used included StackOverflow and the mozilla developer docs.
    https://stackoverflow.com/questions/45406735/how-can-i-unhide-an-image-when-a-button-is-clicked

    https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 
    https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript


## 2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered when creating this submission included adding the game logic for the pattern guessing.  Figuring out the game logic, and thinking about the different conditions that would result in the different states (either a correct guess, an incorrect guess, a win, or a lost) required me to break down and think about the different conditions that would lead to one of these states.  It also required me to figure out the subsequent actions that would need to be taken when each one of these states occur.  For example, for the condition that the user guessed correctly, you need to be able to scan the pattern at that particular guess’s index, and check to see if it matches the button.  If it does, then the guess would be correct.  In order to check if you win the game, you need to test more conditions.  If your progress matches the entire length of the pattern, then you have guessed the entire sequence correctly, and you win.  If you haven’t, then you need to think about what needs to happen next.  If you haven’t finished the game, that means you need to play the next sequence with an additional part of the pattern added on, so you increment your progress.  You also need to keep track of a condition of incrementing your guess counter in order to keep track of how many guesses you have made.  Having so many different conditions made it challenging to figure out how you should nest each condition within each other so that the logic would be correct.  I initially forgot the part where I needed to check if the guessCounter equals the progress, which resulted in not having a condition that checks whether you have guessed up to the progress of the pattern so far.  

In addition, I also implemented the three strikes rule, which made this function more complex.  Instead of just concluding the game upon a single mistake, I needed to find a way to increment the number of mistakes made, and also add another condition to check when the count hit 3.  I initially placed the loseGame() condition in the wrong place, but figured that it needed to be within the condition where it checks to see if the mistake count is 3 or higher.  This satisfied the extra condition, and allowed the player to have three strikes.  


## 3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing my submission, I am curious about learning more about how sound and audio work for web development projects.  Prior to this project, I had not worked on any projects that involved audio before, so having the opportunity to develop functions that utilized the Web Audio API to help process and synthesize audio in this game was fascinating.  I had worked with other API’s before, but none that had anything to do with audio and sound.  Most of the API’s that I have had experience with usually have to do with getting data from a database for objects like movies or a store inventory.  I thought it was very interesting that the AudioContext instance could create a sound source and connect it to the sound destination, and the audio routing involves using AudioNodes to act as processing modules for the audio signal.  The methods and functions for the Web Audio API were unlike any other API I had used before, and very particular to sounds, with functions like the start(time) function to schedule sound playback.  Using this API opened my eyes to the vast amount of other APIs that can be used and integrated in web development, ranging from sound, music, to images, and photos.  

I am interested in learning more about how a web application utilizes and connects with APIs to include certain functionalities that would otherwise be too complex to implement, or data that would otherwise be inaccessible.  I am interested in learning more about what REST APIs especially are, and how you can build a REST API from scratch yourself.  These are some fields that were particularly interesting to me, and that I am looking forward to exploring more about.  


## 4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would spend them refactoring the guess(btn) function to see if I could better organize all the nested conditionals, so that they would not need to be nested as much.  In order to refactor it, I might extract the conditional to check if the mistakeCount is greater than 3 into another function.  

I would also add additional features, such as adding a ticking clock to limit the player’s time to make guesses. For the HTML page, I might think about implementing a div for the clock, with another colored div inside that for the display.  I would give that div an id for the text, and then include a function that starts the time, and uses the setTimeout() function after an interval of 20000ms.  The startTime function would need to show the starting time on the timer and decrement as each second goes by.  I might consider using the Date() function, with the associated getSeconds or getMinutes functions to help deal with that.  With that, I would include the sound for the ticking of the clock.

I might think about implementing an additional feature where the game asks the user how many elements they want in the pattern sequence.  The program would take the user’s input and use that in the random pattern generator to generate a secret pattern of that length.  This would allow the user to customize and interact more with the game.  Another additional feature I would add would be to find audio clips to upload to the assets folder and add each clip in an audio tag.  I would swap out the playTone and startTone function for a new function to play the audio clip.  I would try to troubleshoot the problem where the button’s position shift downwards when pressing it due to the appearing image, to see if I can prevent it from moving when pressing it.



## Interview Recording URL Link

https://vimeo.com/695129934


## License

    Copyright Katrina Jang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
