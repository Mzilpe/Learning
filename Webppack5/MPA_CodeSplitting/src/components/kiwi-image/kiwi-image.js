import Kiwi from './kiwi.jpg'
import './kiwi-image.scss'

class KiwiImage {
    render(){
        const image = document.createElement('img');
        image.src= Kiwi;
        image.alt = "Kiwi";
        image.classList.add('kiwi-image');
        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(image)
    }
}

export default KiwiImage;