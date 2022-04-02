// global constants
// const clueHoldTime = 1000; // how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global variables 
// var pattern = [2, 2, 4, 3, 2, 1, 2,4];
var mistakeCount;
var pattern = []
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound

function generateRandomPattern(){
  // generate random pattern
  for (let i=0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * (4 - 1 + 1) + 1))
  }
}


function startGame(){
  //initialize game variables
  mistakeCount = 0;
  generateRandomPattern()
  
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false 
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clueHoldTime = 1000
  guessCounter = 0
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    
    clueHoldTime -= 100
    console.log(clueHoldTime)
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){          //Guess was correct!
      if(progress == pattern.length - 1){
        winGame();                        //GAME ENDS: WIN!
      }else{
        progress++;                       //Pattern correct. Add next piece of pattern.
        playClueSequence();
      }
    }else{
      guessCounter++;                     // Check next guess
    }
  }else{
    mistakeCount += 1                    // Guess was incorrect
    
    if (mistakeCount >= 3) {            // GAME OVER: LOSE if 3 strikes 
      loseGame();
    }
    
    else {
      playClueSequence();
    }
  }
  
}


