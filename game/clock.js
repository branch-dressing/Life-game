import { runEndGame } from './end-game.js';

//Sets a time for 20 mins from now, and displays the countdown on a second by second basis.
//Else it ends the game.
export function countdownTimer(endTime) {
    setInterval(function() {
        let now = new Date().getTime();
        let remainingTime = endTime - now;

        if (remainingTime >= 0) {
            let mins = Math.floor((remainingTime % 3600000) / 60000);
            let secs = Math.floor((remainingTime % 60000) / 1000);
            let timerText = document.getElementById('timer');
            timerText.textContent = `${mins}:${secs}`;
        } else {
            runEndGame();
        }
    }, 1000);
}