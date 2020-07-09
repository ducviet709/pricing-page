let guessesRemaining = 5
let history = []

// let reset = document.getElementById("reset")
let time = 0
let mytime

timeCounting();

function timeCounting() {
    mytime = setInterval(() => {
        time += 1
        if(time == 10) {
            resetGame()

        }
        document.getElementById("timecout").innerHTML= `time ${time}`
    }, 1000);
}



function guessNumber() {
    let userNumber = document.getElementById("userGuess").value
    if (history.includes(userNumber)) {
        document.getElementById("prompt").innerHTML = `have`
        return;

    }

    if(userNumber>100){
        alert("too high")
        return
    }

    guessesRemaining = 5 - history.length;
    if (guessesRemaining == 0) {
        resetGame()
        return;

    }

    if (userNumber > randomNumber) {
        document.getElementById("prompt").innerHTML = `Higher`

    } else if (userNumber < randomNumber) {
        document.getElementById("prompt").innerHTML = `Lower`
    }
    else if (userNumber == randomNumber) {
        document.getElementById("prompt").innerHTML = `Correct`
    }
    history.push(userNumber)
    console.log(history)
    document.getElementById("historyArea").innerHTML = `${history} `
    document.getElementById("remain").innerHTML = `${guessesRemaining} `

}


function resetGame() {
    guessesRemaining = 5
    time = 0
    clearInterval(mytime)
    history = []
    document.getElementById("prompt").innerHTML = ''
    document.getElementById("remain").innerHTML = ''
    document.getElementById("historyArea").innerHTML = ''
    document.getElementById("userGuess").value = ''
    document.getElementById("guessButton").disabled = false
    document.getElementById("timecout").innerHTML= `time ${time}`
    timeCounting()
}

let randomNumber = Math.floor(Math.random() * 100) + 1


