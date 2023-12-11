let cards = [];
let selectedCards = [];

function startGame() {
    playerName = window.prompt("Enter your name:");

    if (!playerName) {
        window.alert("Please enter your name to start the game.");
        return;
    }

    window.alert("Welcome, " + playerName + "! Let's start the game.");

    document.getElementById('game-container').innerHTML = '';
    cards = [];
    selectedCards = [];

    const numbers = Array.from({ length: 5 }, (_, index) => index + 1);

    const allNumbers = [...numbers, ...numbers];

    allNumbers.sort(() => Math.random() - 0.5);

    const gameContainer = document.getElementById('game-container');
    allNumbers.forEach((number, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.number = number;
        card.textContent = '?';
        card.addEventListener('click', () => revealCard(card));
        gameContainer.appendChild(card);
        cards.push(card);
    });
}

function revealCard(card) {

    if (selectedCards.length >= 2) {
        return;
    }

    const number = card.dataset.number;
    card.textContent = number;

    selectedCards.push(card);

    if (selectedCards.length === 2) {
        setTimeout(() => checkMatch(), 1000);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    const number1 = card1.dataset.number;
    const number2 = card2.dataset.number;

    if (number1 === number2) {
        card1.style.background = card2.style.background = 'linear-gradient(to bottom right, #006400, #008000)';
        card1.style.color = card2.style.color = 'white';
        selectedCards = [];
    } else {

        setTimeout(() => {
            card1.textContent = '?';
            card2.textContent = '?';
            selectedCards = [];
        }, 500);
    }
}