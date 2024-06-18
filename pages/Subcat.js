import Leact from "../components/Leact.js";

export default class Subcat extends Leact{
    constructor(){
        super()
        this.state = {

        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<div>Subcat page</div>`
    }
}

customElements.define("subcat-page",Subcat)