import { runEndGame } from './end-game.js';

export function countdownTimer() {
    const endTime = new Date().getTime() + 1200000;
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