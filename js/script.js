function ageInDays() {
    var birthYear = prompt("Please enter your age!");
    var ageIndayss = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageIndayss + " days old!");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flexbox-result").appendChild(h1);
}

function catgenerator() {
    var image = document.createElement('img');
    var div = document.getElementById('cat-gen-div');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}




function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = rpsIntToWord(randToRpsInt());
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result);
    rpsFrontEnd(humanChoice, botChoice, message);
}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function rpsIntToWord(rpsInt) {
    return ['rock', 'paper', 'scissors'][rpsInt];
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 },
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
    if (yourScore == 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    }
    else if (yourScore == 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You won!', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>" + "<h2 style='color:black; font-size:30px; padding:30px;'>" + "Your choice" + "</h2>"
    document.getElementById('flexbox-rps-div').appendChild(humanDiv);

    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>" + "<h2 style='color:black; font-size:30px; padding:30px;'>" + "Computer's choice" + "</h2>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px;'>" + finalMessage['message'] + "</h1>"

    document.getElementById('flexbox-rps-div').appendChild(messageDiv);
    document.getElementById('flexbox-rps-div').appendChild(botDiv);

}

function rpsReset() {
    document.getElementById('flexbox-rps-div').remove();
    var divforReset = document.createElement('div');
    divforReset.className = 'flexbox-rps';
    divforReset.id = 'flexbox-rps-div';
    divforReset.innerHTML = "<img src='https://s3.amazonaws.com/s3.frank.itlab.us/photo-essays/small/may_15_5155_lonely_rock.jpg' id='rock' height=150 width=150 onclick='rpsGame(this)'>" + "        " +
        "<img src='https://shop.dkoutlet.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/C/D/CD-8715_L.jpg' alt='' id='paper' height=150 width=150 onclick='rpsGame(this)'>" + "     " +
        "<img src='http://www.clipartbest.com/cliparts/KTn/Xj6/KTnXj6Mgc.png' alt='' id='scissors' height=150 width=150 onclick='rpsGame(this)'>";

    document.getElementById('tempdiv').appendChild(divforReset);
}

//Change the color of all buttons
var allButtons = document.getElementsByTagName('button');

var copyOfAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyOfAllButtons.push(allButtons[i].classList[1]);
}
console.log(copyOfAllButtons);
function buttonColorChange(buttonThing) {
    if (buttonThing.value == 'red') {
        buttonsRed();
    }
    else if (buttonThing.value == 'green') {
        buttonsGreen();
    }
    else if (buttonThing.value == 'reset') {
        buttonColorReset();
    }
    else if (buttonThing.value == 'random') {
        randomColors();
    }
}
function buttonsRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}
function buttonsGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}
function buttonColorReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyOfAllButtons[i]);
    }
}
function randomColors() {
    var choices = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];
    for (let i = 0; i < allButtons.length; i++) {
        var randomchoice = choices[randomGenerator()];
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randomchoice);
    }
}
function randomGenerator() {
    return Math.floor(Math.random() * 4);
}

// BlackJack

let blackJackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#yourbox', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealerbox', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
}
const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackJackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-reset-table').addEventListener('click', resetTable);



function blackJackHit() {
    if (blackJackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackJackDeal() {
    if (blackJackGame['turnsOver'] == true) {
        //showResult(computeWinner());
        blackJackGame['isStand'] = false;
        let yourimages = document.querySelector(YOU['div']).querySelectorAll('img');
        for (let index = 0; index < yourimages.length; index++) {
            yourimages[index].remove();
        }
        let dealerimages = document.querySelector(DEALER['div']).querySelectorAll('img');
        for (let index = 0; index < dealerimages.length; index++) {
            dealerimages[index].remove();
        }
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        YOU['score'] = 0;
        document.querySelector(DEALER['scoreSpan']).textContent = 0;
        DEALER['score'] = 0;
        document.querySelector(YOU['scoreSpan']).style.color = 'black';
        document.querySelector(DEALER['scoreSpan']).style.color = 'black';
        blackJackGame['turnsOver'] = true;
    }
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomNumber];
}

function updateScore(card, activePlayer) {
    if (card == 'A') {
        if (activePlayer['score'] + blackJackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += activePlayer['score'] + blackJackGame['cardsMap'][card][1];
        }
        else {
            activePlayer['score'] += activePlayer['score'] + blackJackGame['cardsMap'][card][0];
        }
    }
    else {
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else {

        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackJackGame['isStand'] = true;
    while (DEALER['score'] < 16 && blackJackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }


    blackJackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);

}

function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackJackGame['wins']++;
            winner = YOU;
        }
        else if (DEALER['score'] > YOU['score'] || YOU['score'] > 21) {
            blackJackGame['losses']++;
            winner = DEALER;
        }
        else if (YOU['score'] == DEALER['score']) {
            blackJackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackJackGame['losses']++;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackJackGame['draws']++;
    }
    document.querySelector('#wins').textContent = blackJackGame['wins'];
    document.querySelector('#losses').textContent = blackJackGame['losses'];
    document.querySelector('#draws').textContent = blackJackGame['draws'];
    return winner;
}

function showResult(winner) {
    if (blackJackGame['turnsOver'] === true) {
        let message, messageColor;
        if (winner == YOU) {
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        } else if (winner = DEALER) {
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        } else {
            message = 'You drew!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }

}

function resetTable() {
    document.querySelector('#wins').textContent = 0;
    document.querySelector('#losses').textContent = 0;
    document.querySelector('#draws').textContent = 0;
    blackJackGame['wins'] = 0;
    blackJackGame['losses'] = 0;
    blackJackGame['draws'] = 0;
}

const url = 'https://randomuser.me/api/?results=10';
fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let authors = data.results;
        console.log(authors);
        for (let i = 0; i < authors.length; i++) {
            let div = document.createElement('div');
            let image = document.createElement('img');
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(`${title(authors[i].name.first)} ${title(authors[i].name.last)} `));
            image.src = authors[i].picture.large;
            div.appendChild(image);
            div.appendChild(p);
            document.querySelector('.container-6 .flex-ajax-row-1').appendChild(div);
        }
    });

let title = str => str[0].toUpperCase() + str.slice(1);


function showCatGenInfo() {
    
    var x = document.getElementById("h6ForCat");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showRPSInfo() {
    
    var x = document.getElementById("h6ForCat1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showChangeButtonInfo() {
    
    var x = document.getElementById("h6ForCat2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showBlackJackInfo() {
    
    var x = document.getElementById("h6ForCat3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showPeopleInfo() {
    
    var x = document.getElementById("h6ForCat4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}