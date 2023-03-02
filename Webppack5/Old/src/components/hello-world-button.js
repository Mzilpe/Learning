import './hello-world-button.scss'

class HelloWorldButton {
    helloWorldButtonClass = 'hello-world-text';
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World'
        button.classList.add('hello-world-button');
        const body = document.querySelector('body');
        button.onclick = ()=>{
            const p = document.createElement('p');
            p.innerHTML='Hello World';
            p.classList.add(this.helloWorldButtonClass);
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;