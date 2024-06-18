import Leact from "../components/Leact.js";

export default class Home extends Leact{
    constructor(){
        super()
        this.state = {

        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<div>Home page</div>`
    }
}

customElements.define("home-page",Home)