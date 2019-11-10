import { countdownTimer } from './clock.js';
import { postText } from './interactivity.js';

//purposefully not called at the moment
countdownTimer;

const creatorInput = document.getElementById('creator-input');

creatorInput.addEventListener('submit', function(event){
    event.preventDefault();
    const text = document.getElementById('input-box').value;
    
    postText('creator', text);
})