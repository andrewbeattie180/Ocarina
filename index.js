let currentCode = [];

function zeldasLullaby(code){
    let song = [37,38,39,37,38,39];
    if (code.toString() === song.toString()){
        console.log("Zelda's Lullaby")
        const lullaby = new Audio ("./sounds/songs/Ocarina_-_Zelda's_Lullaby.mp3");
        lullaby.currentTime = 5;
        lullaby.play();
    } 
}

function checkSongs(code){
    zeldasLullaby(code);
}
function codeLengthCheck(){
    if (currentCode.length > 6){
        currentCode = [];
    }
}

function codeEntry(event){
    codeLengthCheck();
    let acceptedKeyCodes = [37,38,39,40];
    if (acceptedKeyCodes.indexOf(event.keyCode) !== -1){
    currentCode.push(event.keyCode);
    console.log(currentCode);
    checkSongs(currentCode);
    }
}


function playSound(event) {
    let code;
    if (event.keyCode){
        code=event.keyCode;
    } else{
        code = this.getAttribute('data-key');
    }
    
    const sound = new Audio(`./sounds/notes/OOT_Notes_Ocarina_${code}_short.wav`)
    if(!sound){return};
    const button = document.querySelector(`.button_container[data-key="${code}"]`);
    sound.currentTime = 0;
    sound.play();
    button.classList.add("pressed");
}

function stopSound(event){
    let code;
    if (event.keyCode){
        code=event.keyCode;
    } else{
        code = this.getAttribute('data-key');
    }
    const button = document.querySelector(`.button_container[data-key="${code}"]`)
    if(!button){return};
    button.classList.remove('pressed');
}
  
window.addEventListener("keydown", playSound);
window.addEventListener("keydown", codeEntry);


const buttons = document.querySelectorAll('.button_container');
buttons.forEach(button => button.addEventListener('click',playSound))
buttons.forEach(button => button.addEventListener('transitionend',stopSound))