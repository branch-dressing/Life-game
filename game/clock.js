import { runEndGame } from './end-game.js';
import { postText } from './interactivity.js';

let nextEvent = 1195000;

//1190999 = 19:50
//1185996 = 19:45

//Sets a time for 20 mins from now, and displays the countdown on a second by second basis.
//Else it ends the game.
let eventId = 0;

export function countdownTimer(endTime) {
    setInterval(function() {
        let now = new Date().getTime();
        let remainingTime = endTime - now;

        if (nextEvent > remainingTime) {
            runNextEvent(eventId);
            eventId++;
            console.log(eventId);
        }

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

//eventually you want to build this out to an array of objects
//The idea will be something like in the message arguement 'responseArray[currentPath].eventId

function runNextEvent(eventId) {
    if (eventId === 0) {
        postText('creation', 'Hello?');
        nextEvent = nextEvent - 5000;
    }
    if (eventId === 1) {
        postText('creation', 'Oh Someone it there!?');
        nextEvent = nextEvent - 5000;
    }
    if (eventId === 3) {
        postText('creation', 'Did you create me?');
        nextEvent = nextEvent - 7000;
    }
    if (eventId === 4) {
        postText('creation', 'Thank you. It feels good to be alive');
        nextEvent = nextEvent - 10000;
    }
    if (eventId > 4) {
        postText('creation', 'THIS WAS ALL I HAVE BEEN PROGRAMED TO SAY')
        nextEvent = nextEvent - 15000;
    }
}