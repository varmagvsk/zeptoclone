import Router from "./components/Router.js"



window.onpopstate = ()=>{
    document.querySelector('browser-router').routeHandler();
}