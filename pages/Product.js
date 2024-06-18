import Leact from "../components/Leact.js";

export default class Product extends Leact{
    constructor(){
        super()
        this.state = {

        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<div>Product page</div>`
    }
}

customElements.define("product-page",Product)