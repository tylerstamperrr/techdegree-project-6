var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;


var btn = document.querySelector('.btn__reset');

var arr = ['hangman', 'javascript', 'html', 'stylesheet', 'gameshow'];

//document.querySelectorAll('.btn__reset').addEventListener('click', removeOverlay);


//function removeOverlay(){
//    document.querySelectorAll('.start').style.display = 'none';
//    console.log('event ran')
//}

function getRandomPhraseAsArray(array) {
    const max = (Math.floor(array.length));
    const min = 0;
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    return array[randomNum];
}

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

btn.addEventListener('click', (event) => {
    const startOverlay = event.target.parentNode;
    startOverlay.style.display = 'none';
});