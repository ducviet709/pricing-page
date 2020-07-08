let guessesRemaining = 5
let history = []

// let reset = document.getElementById("reset")


function guessNumber() {
    guessesRemaining = 5 - history.length;
    if (guessesRemaining == 0) {

        resetGame()
        return;

    }
    else {
        let userNumber = document.getElementById("userGuess").value
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
        document.getElementById("historyArea").innerHTML = `${ history } `
        document.getElementById("remain").innerHTML = `${ guessesRemaining } `
    }
}

function resetGame() {
    guessesRemaining = 5
    history = []
    document.getElementById("prompt").innerHTML = ''
    document.getElementById("remain").innerHTML = ''
    document.getElementById("historyArea").innerHTML = ''
    document.getElementById("userGuess").value = ''
}

let randomNumber = Math.floor(Math.random() * 100) + 1


