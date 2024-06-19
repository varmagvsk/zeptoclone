import Leact from "./Leact.js";

export default class Spinner extends Leact{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = `
        
        <img style="width:300px;height:150px" src="../assets/loading.gif"/>
        
        `
    }
}

customElements.define('loading-spinner',Spinner)