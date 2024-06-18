import Leact from "../components/Leact.js";
import AccountNav from "../components/AccountNav.js";

export default class Referral extends Leact{
    constructor(){
        super()
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
                <p>Referral Content</p>
            </div>
        </div>
        
        `
    }
}

customElements.define("referral-page",Referral)