document.addEventListener("DOMContentLoaded", () => {
    // Read URL params 
    const urlParams = new URLSearchParams(window.location.search);
    const numPlayers = parseInt(urlParams.get('players')) || 1;
    const levelsValue = urlParams.get('levels') || 'easy';
    const players = JSON.parse(decodeURIComponent(urlParams.get('names') || '["Player 1"]'));

    // Set player names on page
    for (let i = 1; i <= 4; i++) {
        const playerDiv = document.querySelector(`.player${i}`);
        if (i <= numPlayers) {
            playerDiv.textContent = players[i - 1]; // nickname or default
            playerDiv.style.display = 'block';
        } else {
            playerDiv.style.display = 'none';
        }
    }

    // Number of cards by difficulty 
    // and flexible width of game board
   
    let boardWidth;

switch (levelsValue) {
    case 'easy':
        cardsCount = 16;
        cardClass = 'card-large';
        boardWidth = '50%';   
        break;
    case 'medium':
        cardsCount = 32;
        cardClass = 'card-medium';
        boardWidth = '75%';
        break;
    case 'hard':
        cardsCount = 48;
        cardClass = 'card-small';
        boardWidth = '85%';
        break;
    default:
        cardsCount = 16;
        cardClass = 'card-large';
        boardWidth = '50%';
}

// Apply board width
const gameBoard = document.querySelector('.game-board');
if (gameBoard) {
    gameBoard.style.width = boardWidth;
}

    // Cards data - images
                   
    const pexiCards = [
        { id: 1, openImg: "imgs/cards/open/html-open.png", closeImg: "imgs/cards/close/html-close.png" },
        { id: 2, openImg: "imgs/cards/open/head-open.png", closeImg: "imgs/cards/close/head-close.png" },
        { id: 3, openImg: "imgs/cards/open/body-open.png", closeImg: "imgs/cards/close/body-close.png" },
        { id: 4, openImg: "imgs/cards/open/header-open.png", closeImg: "imgs/cards/close/header-close.png" },
        { id: 5, openImg: "imgs/cards/open/footer-open.png", closeImg: "imgs/cards/close/footer-close.png" },
        { id: 6, openImg: "imgs/cards/open/main-open.png", closeImg: "imgs/cards/close/main-close.png" },
        { id: 7, openImg: "imgs/cards/open/nav-open.png", closeImg: "imgs/cards/close/nav-close.png" },
        { id: 8, openImg: "imgs/cards/open/section-open.png", closeImg: "imgs/cards/close/section-close.png" },
        { id: 9, openImg: "imgs/cards/open/article-open.png", closeImg: "imgs/cards/close/article-close.png" },
        { id: 10, openImg: "imgs/cards/open/aside-open.png", closeImg: "imgs/cards/close/aside-close.png" },
        { id: 11, openImg: "imgs/cards/open/h-open.png", closeImg: "imgs/cards/close/h-close.png" },
        { id: 12, openImg: "imgs/cards/open/p-open.png", closeImg: "imgs/cards/close/p-close.png" },
        { id: 13, openImg: "imgs/cards/open/div-open.png", closeImg: "imgs/cards/close/div-close.png" },
        { id: 14, openImg: "imgs/cards/open/ul-open.png", closeImg: "imgs/cards/close/ul-close.png" },
        { id: 15, openImg: "imgs/cards/open/img-open.png", closeImg: "imgs/cards/close/img-close.png" },
        { id: 16, openImg: "imgs/cards/open/a-open.png", closeImg: "imgs/cards/close/a-close.png" },
        { id: 17, openImg: "imgs/cards/open/span-open.png", closeImg: "imgs/cards/close/span-close.png" },
        { id: 18, openImg: "imgs/cards/open/strong-open.png", closeImg: "imgs/cards/close/strong-close.png" },
        { id: 19, openImg: "imgs/cards/open/em-open.png", closeImg: "imgs/cards/close/em-close.png" },
        { id: 20, openImg: "imgs/cards/open/b-open.png", closeImg: "imgs/cards/close/b-close.png" },
        { id: 21, openImg: "imgs/cards/open/i-open.png", closeImg: "imgs/cards/close/i-close.png" },
        { id: 22, openImg: "imgs/cards/open/br-open.png", closeImg: "imgs/cards/close/br-close.png" },
        { id: 23, openImg: "imgs/cards/open/form-open.png", closeImg: "imgs/cards/close/form-close.png" },
        { id: 24, openImg: "imgs/cards/open/input-open.png", closeImg: "imgs/cards/close/input-close.png" },
        { id: 25, openImg: "imgs/cards/open/select-open.png", closeImg: "imgs/cards/close/select-close.png" },
        { id: 26, openImg: "imgs/cards/open/label-open.png", closeImg: "imgs/cards/close/label-close.png" },
        { id: 27, openImg: "imgs/cards/open/button-open.png", closeImg: "imgs/cards/close/button-close.png" },
        { id: 28, openImg: "imgs/cards/open/table-open.png", closeImg: "imgs/cards/close/table-close.png" },
        { id: 29, openImg: "imgs/cards/open/tbody-open.png", closeImg: "imgs/cards/close/tbody-close.png" },
        { id: 30, openImg: "imgs/cards/open/td-open.png", closeImg: "imgs/cards/close/td-close.png" },
        { id: 31, openImg: "imgs/cards/open/th-open.png", closeImg: "imgs/cards/close/th-close.png" },
        { id: 32, openImg: "imgs/cards/open/video-open.png", closeImg: "imgs/cards/close/video-close.png" },
        { id: 33, openImg: "imgs/cards/open/display-open.png", closeImg: "imgs/cards/close/display-close.png" },
        { id: 34, openImg: "imgs/cards/open/position-open.png", closeImg: "imgs/cards/close/position-close.png" },
        { id: 35, openImg: "imgs/cards/open/width-open.png", closeImg: "imgs/cards/close/width-close.png" },
        { id: 36, openImg: "imgs/cards/open/height-open.png", closeImg: "imgs/cards/close/height-close.png" },
        { id: 37, openImg: "imgs/cards/open/margin-open.png", closeImg: "imgs/cards/close/margin-close.png" },
        { id: 38, openImg: "imgs/cards/open/padding-open.png", closeImg: "imgs/cards/close/padding-close.png" },
        { id: 39, openImg: "imgs/cards/open/border-open.png", closeImg: "imgs/cards/close/border-close.png" },
        { id: 40, openImg: "imgs/cards/open/overflow-open.png", closeImg: "imgs/cards/close/overflow-close.png" },
        { id: 41, openImg: "imgs/cards/open/font-open.png", closeImg: "imgs/cards/close/font-close.png" },
        { id: 42, openImg: "imgs/cards/open/text-open.png", closeImg: "imgs/cards/close/text-close.png" },
        { id: 43, openImg: "imgs/cards/open/background-open.png", closeImg: "imgs/cards/close/background-close.png" },
        { id: 44, openImg: "imgs/cards/open/color-open.png", closeImg: "imgs/cards/close/color-close.png" },
        { id: 45, openImg: "imgs/cards/open/css-list-open.png", closeImg: "imgs/cards/close/css-list-close.png" },
        { id: 46, openImg: "imgs/cards/open/css-table-open.png", closeImg: "imgs/cards/close/css-table-close.png" },
        { id: 47, openImg: "imgs/cards/open/animation-open.png", closeImg: "imgs/cards/close/animation-close.png" },
        { id: 48, openImg: "imgs/cards/open/transition-open.png", closeImg: "imgs/cards/close/transition-close.png" }
    ];

    // Select pairs for game
    const pairsNeeded = cardsCount / 2;
    const selectedPairs = pexiCards.sort(() => Math.random() - 0.5).slice(0, pairsNeeded);

    let gameDeck = [];
    selectedPairs.forEach(card => {
        gameDeck.push({ id: card.id, type: "open", img: card.openImg });
        gameDeck.push({ id: card.id, type: "close", img: card.closeImg });
    });

    gameDeck = gameDeck.sort(() => Math.random() - 0.5);

    // Render cards
    const board = document.querySelector(".game-board");
    board.innerHTML = "";

    gameDeck.forEach(card => {
        board.innerHTML += `
            <div class="game-card ${cardClass}" data-id="${card.id}" data-type="${card.type}">
                <div class="inner">
                    <div class="front"><img src="${card.img}" /></div>
                    <div class="back"><img src="imgs/cards/back.png" /></div>
                </div>
            </div>
        `;
    });
const allCards = document.querySelectorAll(".game-card");

// Peek function: flip all cards for a given time (milliseconds) 
function peekCards(duration = 2000) {
    const allCards = document.querySelectorAll(".game-card"); // fresh selection
    allCards.forEach(card => card.classList.add("flipped")); // flip all
    setTimeout(() => {
        allCards.forEach(card => card.classList.remove("flipped")); // flip back
    }, duration);
}




// --- Initial peek: flip all cards for 2s ---
peekCards(4000);

// --- Hook up Peek button ---
const peekBtn = document.getElementById("peek-btn");

if (peekBtn) {
    peekBtn.addEventListener("click", () => peekCards(2000));
}

    // --- Game logic ---
    let firstCard = null;
    let secondCard = null;
    let pause = false;

    allCards.forEach(card => {
        card.addEventListener("click", () => {
            if (pause) return;
            if (card.classList.contains("flipped")) return;

            card.classList.add("flipped");

            if (!firstCard) {
                firstCard = card;
            } else {
                secondCard = card;
                pause = true;

                const id1 = firstCard.dataset.id;
                const id2 = secondCard.dataset.id;
                const t1 = firstCard.dataset.type;
                const t2 = secondCard.dataset.type;

                if (id1 === id2 && t1 !== t2) {
                    setTimeout(() => {
                        firstCard.style.display = "none";
                        secondCard.style.display = "none";
                        resetTurn();
                    }, 500);
                } else {
                    setTimeout(() => {
                        firstCard.classList.remove("flipped");
                        secondCard.classList.remove("flipped");
                        resetTurn();
                    }, 800);
                }
            }
        });
    });

    function resetTurn() {
        firstCard = null;
        secondCard = null;
        pause = false;
    }
});
