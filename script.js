let dat = document.querySelectorAll(".drum");
for (let i = 0; i < dat.length; i++) {
    dat[i].addEventListener("click", sense);
}
function sense(key) {
    sound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}
document.addEventListener("keydown", function press(event) {
    sound(event.key);
    buttonAnimation(event.key);
});
 

function sound(key) {
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default: break;
    }
    audio.play();
}

function buttonAnimation(key){
    var actButton = document.querySelector("." + key);
    actButton.classList.add("pressed");
    setTimeout(function (){
        actButton.classList.remove("pressed");
    }, 100)
}
    //