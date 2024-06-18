import Leact from "./Leact.js";


export default class AccountNav extends Leact{
    constructor(){
        super();
        this.state = {

        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `<div>
        <ul>
            <li><a class='nav-link' href='/account'>Orders</a></li>
            <li><a class='nav-link' href='/account/support'>Customer Support</a></li>
            <li><a class='nav-link' href='/account/referrals'>Manage Referrals</a></li>
            <li><a class='nav-link' href='/account/addresses'>Addresses</a></li>
            <li><a class='nav-link' href='/account/profile'>Profile</a></li>
            <li><a class='nav-link' href='/account/wallet'>Wallet</a></li>
        
        </ul>
        
        
        </div>`

        const links = this.shadowRoot.querySelectorAll('.nav-link')

        for(let i=0;i<links.length;i++){
            links[i].addEventListener('click',(e)=>{
                e.preventDefault()
                history.pushState({},"",e.currentTarget.href)
                const router  = document.querySelector('browser-router')
                router.routerHandler();
            })
        }
    }
}

customElements.define('account-nav',AccountNav)