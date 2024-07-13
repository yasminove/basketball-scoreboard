let homeScreen = document.getElementById('home-screen');
let guestScreen = document.getElementById('guest-screen');

let homeScore = Number(homeScreen.textContent) 
let guestScore = Number(guestScreen.textContent);

function addOnePointToHome() {
    let currentScore = Number(homeScreen.textContent)
    currentScore += 1
    homeScreen.textContent = currentScore
}

function addTwoPointsToHome() {
    let currentScore = Number(homeScreen.textContent)
    currentScore += 2
    homeScreen.textContent = currentScore
}

function addThreePointsToHome() {
    let currentScore = Number(homeScreen.textContent)
    currentScore += 3
    homeScreen.textContent = currentScore
}

function addOnePointToGuest() {
    let currentScore = Number(guestScreen.textContent);
    currentScore += 1
    guestScreen.textContent = currentScore
}

function addTwoPointsToGuest() {
    let currentScore = Number(guestScreen.textContent);
    currentScore += 2
    guestScreen.textContent = currentScore;
}

function addThreePointsToGuest() {
    let currentScore = Number(guestScreen.textContent);
    currentScore += 3;
    guestScreen.textContent = currentScore
}