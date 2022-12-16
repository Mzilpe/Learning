import './hello-world-button.scss'

class HelloWorldButton {
    buttonTextClass = 'hello-world-text';
    render(){
        
        const button = document.createElement('button')
        button.innerHTML="Hello World";
        button.classList.add('hello-world-button')
        const body = document.querySelector('body')
        body.appendChild(button)
        button.onclick = function () {
            const p = document.createElement( 'p' );
            p.innerHTML = 'Hello World'
            p.classList.add(this.buttonTextClass)
            body.appendChild(p);
        }   
    }
}

export default HelloWorldButton;