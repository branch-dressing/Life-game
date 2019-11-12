import { countdownTimer } from './clock.js';
import { postText } from './interactivity.js';

const timeStamp = new Date().getTime();
const endTime = timeStamp + 1200000;

//let timerText = document.getElementById('timer');
//timerText.textContent ===

//purposefully not called at the moment
countdownTimer(endTime);



//Text input
const creatorInput = document.getElementById('creator-input');
creatorInput.addEventListener('submit', function(event){
    event.preventDefault();
    
    let text = document.getElementById('input-box');
    postText('creator', text.value.toLowerCase());
    text.value = '';
});


