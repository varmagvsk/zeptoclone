import Leact from "../components/Leact.js";

export default class Category extends Leact{
    constructor(){
        super()
        this.state = {

        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<div>Category page</div>`
    }
}

customElements.define("category-page",Category)