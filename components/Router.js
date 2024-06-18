import Leact from "./Leact.js"
import NavBar from "./Navbar.js";
import Account from "../pages/Account.js";
import Home from "../pages/Home.js";
import Search from "../pages/Search.js";
import Support from "../pages/Support.js";
import Referral from "../pages/Referral.js";
import Profile from "../pages/Profile.js";
import Category from "../pages/Category.js";
import Address from "../pages/Address.js";
import Wallet from "../pages/Wallet.js";
export default class Router extends Leact{
    constructor(){
        super();
        this.attachShadow({mode:'open'})

        this.routes = [
            {
                path: '/', view:`<home-page></home-page>`,query:false
            },
            {
                path: '/search', view:`<search-page></search-page>`,query:false
            },
            {
                path: '/account', view: `<account-page></account-page>`,query:false
            },
            {
                path: '/account/support', view: `<support-page></support-page>`,query:false
            },
            {
                path: '/account/referrals', view: `<referral-page></referral-page>`,query:false
            },
            {
                path: '/account/profile', view: `<profile-page></profile-page>`,query:false
            },
            {
                path: '/account/addresses', view: `<address-page></address-page>`,query:false
            },
            {
                path: '/account/wallet', view: `<wallet-page></wallet-page>`,query:false
            },
            {
                path: '/categories', view: [`<category-page></category-page>`,`<subcat-page></subcat-page>`],query:true
            },
            {
                path: '/product', view: [`<allproduct-page></allproduct-page>`,`<product-page></product-page>`],query:true

            },
            {
                path: '/about', view: `<about-page></about-page>`,query:false
            },
            {
                path: '/cart', view: `<cart-page></cart-page>`,query: false,
            }

        ]

        this.template = document.createElement('template')
        this.template.innerHTML = `<div>
        <nav-bar style="position:fixed;top:0;left:0;right:0" count=11></nav-bar>
        <div style="margin-top:100px" class='content'></div>
        </div>`

        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
        this.routerHandler()
    }

    routerHandler=()=>{
        let pathname = window.location.pathname
        const pathArr = pathname.split('?');
        const route = this.routes.find((route) => route.path == pathArr[0])
        if(route.query && route){
            if(pathArr.length == 1){
                this.shadowRoot.querySelector('.content').innerHTML = route.view[0]
            }else{
                this.shadowRoot.querySelector('.content').innerHTML = route.view[1]
            }
        }else if(route){
            this.shadowRoot.querySelector('.content').innerHTML = route.view
        }else{
            this.shadowRoot.querySelector(".content").innerHTML = `<notfound-page></notfound-page>`
        }
        
    }

    



}


customElements.define('browser-router',Router)