let currentCode = [];
let songs = [{
    name: "Zelda's Lullaby",
    code: 373839373839
},{
    name: "Epona's Song",
    code: 383937383937
},{
    name: "Saria's Song",
    code: 403937403937
},{
    name: "Sun's Song",
    code: 394038394038
}, {
    name: "Song Of Time",
    code: 396540396540
},{
    name: "Song of Storms",
    code: 654038654038
}]

function playSong(entry){
    let codes = songs.map(song=>song.code);
    entry = parseInt(entry.join(''))
    if (codes.indexOf(entry) !== -1){
        const correctSound = new Audio ('./sounds/notes/OOT_Song_Correct.wav')
        const correctSong = new Audio (`./sounds/songs/${entry}.mp3`)
        correctSound.addEventListener('ended',correctSong.play())
        correctSound.play();
        
    } else {
        const incorrectSound = new Audio ('./sounds/notes/OOT_Song_Error.wav');
        incorrectSound.play();
    
    }
    currentCode = [];
}

function checkSongs(code){
    if (code.length === 6){
    playSong(code);
    }
}
    
function codeEntry(event){
    let acceptedKeyCodes = [37,38,39,40,65];
    let code;
    if (event.keyCode){
        code = event.keyCode;
    } else{
        code = parseInt(this.getAttribute('data-key'));
    }

    if (acceptedKeyCodes.indexOf(code) !== -1){
    currentCode.push(code);
    checkSongs(currentCode);
    }
}


function playSound(event) {
    let code;
    if (event.keyCode){
        code=event.keyCode;
    } else{
        code = parseInt(this.getAttribute('data-key'));
        // console.log('Div clicked')
    }
    let acceptedKeyCodes = [37,38,39,40,65];
    if (acceptedKeyCodes.indexOf(code) !== -1){
    const sound = new Audio(`./sounds/notes/OOT_Notes_Ocarina_${code}_short.wav`);
    const button = document.querySelector(`.button_container[data-key="${code}"]`)
    sound.currentTime = 0;
    sound.play();
    button.classList.add("pressed");
    }
}

function stopSound(event){
    let code;
    if (event.keyCode){
        code=event.keyCode;
    } else{
        code = parseInt(this.getAttribute('data-key'));
    }
    // const button = document.querySelector(`.button_container[data-key="${code}"]`)
    // if(!button){return};
    // button.classList.remove('pressed');
}
  
window.addEventListener("keydown", playSound);
window.addEventListener("keydown", codeEntry);


const buttons = document.querySelectorAll('.button_container');
buttons.forEach(button => button.addEventListener('click', playSound));
buttons.forEach(button => button.addEventListener('click', codeEntry))
buttons.forEach(button => button.addEventListener('transitionend',stopSound))