const qwerty = document.querySelector('#qwerty'),
phrase = document.querySelector('#phrase'),
startButton = document.querySelector('.btn__reset'),


phrases = ['hangman', 'javascript', 'html', 'stylesheet', 'gameshow', 'Web Developer', 'Front End Web Dev'];

getRandomPhraseAsArray = (array) => {
    const max = (Math.floor(array.length));
    const min = 0;
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    return array[randomNum];
},


addPhrasetoDisplay = (string) => {
    const phraseList = phrase.childNodes[0].nextElementSibling;
    for (let i = 0; i < string.length; i++) {
        let listItem = document.createElement('li'),
            listContent = document.createTextNode(string[i]);
        if (string[i] !== ' ') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
        listItem.appendChild(listContent);
        phraseList.appendChild(listItem);
    }
},


restart = () => {
    const phraseUl = phrase.childNodes[0].nextElementSibling,
    buttons = document.querySelectorAll('button');
    oldLetters = phraseUl.childNodes,
    tryList = document.querySelector('ol'),
    tries = document.querySelectorAll('.tries'),
    heartImg = 'images/liveHeart.png';
    let newPhrases = ['hangman', 'javascript', 'html', 'stylesheet', 'gameshow', 'Web Developer', 'Front End Web Dev'];

    while (oldLetters.length > 0) {
        oldLetters.forEach(letter => {
            letter.remove();
        });
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = '';
        buttons[i].disabled = false;
    }
    if(tries.length !== 5) {
        for (let i = 0; i < (5 - tries.length); i++) {
            const attempt = document.createElement('li'),
            image = new Image(36.5, 35);
            image.src = heartImg;
            image.className = '__web-inspector-hide-shortcut__';
            tryList.appendChild(attempt);
            attempt.appendChild(image);
        }
    const listofTries = document.querySelectorAll('ol > li');
        listofTries.forEach(attempt => {
            attempt.className = 'tries';
        });
    }
    missed = 0;
    phraseArray = getRandomPhraseAsArray(newPhrases);
    addPhrasetoDisplay(phraseArray);
};

let missed = 0,


phraseArray = getRandomPhraseAsArray(phrases);

addPhrasetoDisplay(phraseArray);


startButton.addEventListener('click', (event) => {
    const startOverlay = event.target.parentNode,
        oldLetters = document.querySelector('letter')
    if (startOverlay.className === 'start' || startOverlay.className === 'win' || startOverlay.className === 'lose') {
        restart();
        startOverlay.style.display = 'none';
    }
});


qwerty.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        let button,
        letterFound = '',
        tries = document.querySelectorAll('.tries');


            const checkLetter = (letter) => {
                let letters = document.querySelectorAll('.letter'),
                matchedLetterCount = 0;
                letters.forEach(item => {
                    let currentLetter = item.innerHTML.toLowerCase();
                    if (currentLetter === letter) {
                        item.className += ' show';
                        matchedLetterCount += 1;
                    }
                });
                if (matchedLetterCount === 0) {
                    letterFound = null;
                    matchedLetterCount = 0;
                } else if(matchedLetterCount > 0) {
                    letterFound = letter;
                    matchedLetterCount = 0;
                }
            },
        

            checkWin = () => {
                const revealedLetters = document.querySelectorAll('.show'),
                lettersInPhrase = document.querySelectorAll('.letter');
                let startOverlay = document.querySelector('#overlay'),
                overlayTitle = document.querySelector('.title');
        
                if(revealedLetters.length === lettersInPhrase.length) {
                    startOverlay.style.display = '';
                    startOverlay.className = 'win';
                    overlayTitle.textContent = 'You Win!';
                } else if (missed === 5) {
                    startOverlay.style.display = '';
                    startOverlay.className = 'lose';
                    overlayTitle.textContent = 'You Lose!';
                }
            };


            button = event.target.textContent.toLowerCase();
            event.target.className = 'chosen';
            event.target.disabled = true;
            checkLetter(button);
            if (letterFound === null) {
                let counter = missed;
                tries[0].remove();
                missed += 1;
            }
            checkWin();
    }
});
