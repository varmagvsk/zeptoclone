import Leact from "./Leact.js";

export default class CartComp extends Leact{
    constructor(){
        super();
        this.state = {

        }
        console.log("cart instance")
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
        .cart{
            position:fixed;
            bottom:0;
            left: 0;
            top:0;
            right:0;
            background-color: rgb(0,0,0,0.4);
            display:flex;
            justify-content: flex-end;

        }
        .cart-content{
            width: 300px;
            background-color: #fff;
            height:100vh;
        }
        
        </style>
        <div class='cart'>
            <div class='cart-content'>
                <div style="display: flex;justify-content: space-between;align-items:center;box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.05);padding: 10px;height:40px">
                    <div style="">Cart(0)</div>
                    <svg  id="closebtn" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
                <div>
                
                Cart Items
                
                </div>
            </div>
        </div>
        
        `;
        this.shadowRoot.querySelector("#closebtn").addEventListener("click",(e)=>{
            let router = document.querySelector('browser-router')
            router.setState({showCart:false})
        })
    }
}

customElements.define('cart-component',CartComp)