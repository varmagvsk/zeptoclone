import Leact from "./Leact.js"
import NavBar from "./Navbar.js";


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
        <nav-bar></nav-bar>
        <div class='content'></div>
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