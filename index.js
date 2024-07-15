let homeScreen = document.getElementById('home-screen');
let guestScreen = document.getElementById('guest-screen');

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

