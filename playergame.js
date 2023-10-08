
// Player Stats
let cards = []
let message = ""




let messageEl = document.getElementById("message-el")

// let playerCardsEl = document.getElementById("player-cards-el")
// let playerSumEl = document.getElementById("player-sum-el")


const startButton = document.getElementById("start-game-el")
// const newCardButton = document.getElementById("new-card-el")
// const stayButton = document.getElementById("stay-el") 
const resetButton = document.getElementById("reset-all-el")


const playerName = document.getElementById("player-el")
const playerCardOneImage = document.getElementById("player-card-one-el")
// const playerCardTwoImage = document.getElementById("player-card-two-el")
// const cardImagesPlayerEl = document.getElementById("card-images-player-el")





// Assign Random Card to Player

const cardDeck = {
    cardImage: [
        { filename: "MS.png", value: 'Mike S.' },
        { filename: "HH.png", value: 'Haley H.' },
        { filename: "HD.png", value: 'Hunter D.' },
        { filename: "CR.png", value: 'Connor R.' },
        { filename: "OJ.png", value: 'Omar J.' },
        { filename: "KC.png", value: 'Kevin C.' },
        { filename: "EZ.png", value: 'Emily Z.' },
        { filename: "KD.png", value: 'Kevin D.' },
        { filename: "JC.png", value: 'Jun C.' },
        { filename: "IA.png", value: 'Imtiaz A.' },
        { filename: "CB.png", value: 'Chadd B.' },
        { filename: "MK.png", value: 'Megan K.' },
        { filename: "MH.png", value: 'Mariam H.' },
        { filename: "CM.png", value: 'Conlin M.' },
        { filename: "MM.png", value: 'Mac M.' },
        { filename: "EC.png", value: 'Erik C.' },
        { filename: "CO.png", value: 'Cam O.' },
        { filename: "AH.png", value: 'Lynnel M.' },], 


    assignPlayerRandomCard: function() {

        const cardAssigned = Math.floor(Math.random() * this.cardImage.length);
        const cardObject = this.cardImage[cardAssigned]; 
        const cardIndex = this.cardImage.indexOf(cardObject) + 1;
        const cardImage = cardObject.filename;
        const playerValueName = cardObject.value;

        return { cardImage, playerValueName }

    }

};


function hidePlayerImages() {

    playerCardOneImage.style.display = "";

}



function drawPlayerCard() {  

    hidePlayerImages()  

    const { cardImage, playerValueName } = cardDeck
.assignPlayerRandomCard();
    
    const newcardImage = document.createElement("img")
    newcardImage.src = `images/cards/${cardImage}`;

    cardImagesPlayerEl.appendChild(newcardImage);

    
    cards.push(playerValueName)
  

}


function playerRules() {

    var playerSum = cards.reduce((acc, val) => acc + val, 0)
    playerSumEl.textContent = playerSum
    playerCardsEl.textContent = cards.join(", ")

    if (playerSum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (playerSum == 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        dimNewCard()
        dimStay()
        undimStartGame()


    } else {
        message = "You're out of the game! Dealer Wins!"
        isAlive = false
        dimNewCard()
        dimStay()
        undimStartGame()


    }
    messageEl.textContent = message;

}











// Game Actions

function startPlayerGame() {
        
    resetPlayerGame()
    drawPlayerCard()


}


function clearAll() {
    location.reload();
}









//Reset Functions

function resetPlayerGame() {
    cards = []
    hasBlackJack = false
    isAlive = true
    message = ""
    cardNumber = 0
    messageEl.textContent = ""
    playerCardsEl.textContent = ""
    playerSumEl.textContent = ""
    removePlayerImages()
    undimStartGame()
    undimStay()
    dimNewCard()



}


function removePlayerImages() {

    while (cardImagesPlayerEl.firstChild) {
        cardImagesPlayerEl.removeChild(cardImagesPlayerEl.firstChild);
    }
}



function dimStartGame() {
    startButton.classList.add("dimmed")
    startButton.disabled = true
}

function undimStartGame() {
    startButton.classList.remove("dimmed")
    startButton.disabled = false
}

function dimNewCard() {
    newCardButton.classList.add("dimmed")
    newCardButton.disabled = true
}

function undimNewCard() {
    newCardButton.classList.remove("dimmed")
    newCardButton.disabled = false
}


function dimStay() {
    stayButton.classList.add("dimmed")
    stayButton.disabled = true
}

function undimStay() {
    stayButton.classList.remove("dimmed")
    stayButton.disabled = false
}

function stopConfetti() {

    const confettiDivEl = document.getElementById("confetti-container");
    confettiDivEl.classList.remove("confetti");

}


