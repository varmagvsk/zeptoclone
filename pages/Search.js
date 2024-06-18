import Leact from "../components/Leact.js";

export default class Search extends Leact{
    constructor(){
        super()
        this.state = {

        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<div>Search page</div>`
    }
}

customElements.define("search-page",Search)