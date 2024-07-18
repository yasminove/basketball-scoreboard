let homeScreen = document.getElementById('home-screen');
let guestScreen = document.getElementById('guest-screen');

let timerScreen = document.getElementById('timer-screen');
let newGameButton = document.getElementById('new-game');

newGameButton.disabled = true;
newGameButton.disabled = true;
var homeScore = 0;
var guestScore = 0;

function addOnePointToHome() {
    homeScore += 1
    console.log(homeScore, 'homeScore addOnePointToHome');
    homeScreen.textContent = homeScore
    checkWhoIsLeading()
}

function addTwoPointsToHome() {
    homeScore+= 2
    homeScreen.textContent = homeScore;
    checkWhoIsLeading()
}

function addThreePointsToHome() {
    homeScore += 3
    homeScreen.textContent = homeScore
    checkWhoIsLeading()
}

function addOnePointToGuest() {
    guestScore += 1
    guestScreen.textContent = guestScore
    checkWhoIsLeading()
}

function addTwoPointsToGuest() {
    guestScore += 2
    guestScreen.textContent = guestScore;
    checkWhoIsLeading()
}

function addThreePointsToGuest() {
    guestScore += 3;
    guestScreen.textContent = guestScore;
    checkWhoIsLeading()
}

function checkWhoIsLeading() {
    if (homeScore > guestScore) {
        homeScreen.classList.add('highlight');
        guestScreen.classList.remove('highlight')
    } else if (homeScore < guestScore) {
        guestScreen.classList.add('highlight');
        homeScreen.classList.remove('highlight')
    } else {
        homeScreen.classList.remove('highlight')
        guestScreen.classList.remove('highlight')
    }
}

let time = 10;
function startTimer() {
    let timerId = setInterval(function () {
        if (time > 0) {
            time--;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;

            if (seconds < 10) {
                seconds = `0${seconds}`
            }

            timerScreen.textContent = `${minutes}:${seconds}`
       
        } else {
            clearInterval(timerId)
            timerScreen.textContent = `Time\'s up`
            newGameButton.disabled = false;
            disableIncButtons()
            
        }
    }, 1000)
}

startTimer()

function disableIncButtons() {
    let buttons = document.querySelectorAll('.add-points-btn');
    buttons.forEach(button => button.disabled = true)
}

function enableIncButtons() {
    let buttons = document.querySelectorAll('.add-points-btn');
    buttons.forEach(button => button.disabled = false)
}

function newGame() {
    time = 10;
    homeScore = 0
    homeScreen.textContent = '0';
    guestScore = 0;
    guestScreen.textContent = '0';
    guestScreen.classList.remove('highlight')
    homeScreen.classList.remove('highlight');
    timerScreen.textContent = "00:00"
    enableIncButtons()
    startTimer()
    newGameButton.disabled = true
}
