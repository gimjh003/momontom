const body = document.querySelector("body");
const IMG_NUMBER = 4;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function bg_init(){
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}
bg_init();

