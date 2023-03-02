import Game from './game.jpg'
import altText from './altText.txt'

function addImage() {
    const img = document.createElement('img')
    img.alt = altText;
    img.width = 400;
    img.src = Game;
    const body = document.querySelector('body')
    body.appendChild(img);
}

export default addImage;