
let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')
let home = 0
let guest = 0

function homeOne() {
    home += 1
    scoreHome.innerHTML = home
}

function homeTwo() {
    home += 2
    scoreHome.innerHTML = home
}

function homeThree() {
    home += 3
    scoreHome.innerHTML = home
}


function guestOne() {
    guest += 1
    scoreGuest.innerHTML = guest
    console.log('test')
}

function guestTwo() {
    guest += 2
    scoreGuest.innerHTML = guest
}

function guestThree() {
    guest += 3
    scoreGuest.innerHTML = guest
}
