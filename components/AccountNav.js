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
        <style>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.cantainer{
    width: 100%;
    height: 100vh;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.accounts_cantainer{
    /* width: 1137px;
    height: 571px; */
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #e8e9ed;
    display: flex;
    
}

.my_accounts_details{
    background: #3c006b;
    /* width: 30%; */
    border-radius: 10px 0px 0px 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
}
.heading{
    border-bottom: 2px solid #e2e8f0;
}

.heading h1{
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    letter-spacing: .05em;
}
.heading b{
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: .025em;
    color: #a7a7a6;
}

.links{
 display: flex;
 /* align-items: center; */
 flex-direction: column;
 justify-content: space-around;

}

.links_details{
  width: 354px;
  height: 64px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}
.links_details a{
    width: 284px;
    height: 64px;
    text-decoration-line: none;
    color: #f4ffff;
    font-size: 1rem;
    line-height: 1.5rem;
    
}
.links_details svg{
    width: 22px;
    height: 24px;
}


.logout{
    border-top: 1px solid #e2e8f0;
}
.logout span{
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    letter-spacing: .05em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.my_accounts_info{
    width: 70%;
    padding: 20px;
    
}



    </style>
        <div class="my_accounts_details">
                <div class="heading">
                    <h1>My Account</h1>
                    <b>+916303967067</b>
                </div>
                <div class="links">
                    
                        <div class="links_details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                              </svg>
                            <a class='nav-link' href='/account'>Orders</a>
                            </div>
                        <div class="links_details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
                              </svg>
                            <a class='nav-link' href='/account/support'>Customer Support</a>
                        </div>
                        <div class="links_details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                              </svg>
                            <a class='nav-link' href='/account/referrals'>Manage Referrals</a>
                            </div>
                        <div class="links_details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                              </svg>
                            <a class='nav-link' href='/account/addresses'>Addresses</a>
                        </div>
                        <div class="links_details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                              </svg>
                            <a class='nav-link' href='/account/profile'>Profile</a>
                        </div>
                        <div class="links_details">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                              </svg>
                            <a class='nav-link' href='/account/wallet'>Wallet</a>
                        </div>
                    
                </div>
                <div class="logout">
                    <span>Logout</span>
                </div>
            </div>
        
        
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