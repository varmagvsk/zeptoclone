import Leact from "../components/Leact.js";

export default class Wallet extends Leact{
    constructor(){
        super();
        this.state = {

        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <div style="display:flex;flex-direction:row">
            <div style="width:30%">
                <account-nav></account-nav>
            </div>
            <div style="width:70%;display:flex;justify-content:center;align-items:center">
                <p>Wallet Content</p>
            </div>
        </div>
        
        `
    }
}

customElements.define('wallet-page',Wallet)