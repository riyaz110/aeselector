

let message = ""


let messageEl = document.getElementById("message-el")

const playerNameEl = document.getElementById("player-el")
const defaultCardEl = document.getElementById("default-card-el")
const imageDivEL = document.getElementById("image-div-el")



const startButton = document.getElementById("start-game-el")
const resetButton = document.getElementById("reset-all-el")


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
        const playerName = cardObject.value;

        return { cardImage, playerName }

    }

};



// Hide Current Card

function hidePlayerImages() {

    defaultCardEl.style.display = "none";

}


// Draw Player Card

function drawPlayerCard() {  

    const { cardImage, playerName } = cardDeck.assignPlayerRandomCard();
    
    const newcardImage = document.createElement("img")
    newcardImage.src = `images/cards/${cardImage}`;

    imageDivEL.appendChild(newcardImage);
    
    playerNameEl.textContent = playerName;
  

}


// Clear Game

function clearAll() {
    location.reload();
}


function resetPlayer() {

    playerNameEl.textContent = "";
    imageDivEL.innerHTML = "";



}