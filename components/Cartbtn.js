import Leact from "./Leact.js";

export default class CartBtn extends Leact{
    constructor(){
        super();
        this.state = {
            count: parseInt(this.getAttribute('cartcount'))
        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        //console.log("rendered")
        this.shadowRoot.innerHTML = `
        <style>
        .place_card_action {
                
            }

            .place_card_action button{
                box-sizing: border-box;
                width: 100%;
                background: #fff;
                color: rgb(255, 50, 105);
                border: none;
                border-radius: 4px;
                outline: 1px solid rgb(255, 50, 105);
                outline-offset: 2px;
                transition: .4s;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
            }

            .place_card_action button:hover{
                outline-offset: 4px;
            }
            
            .count-btns{
            width: 100%;
            display: flex;
            outline: 1px solid rgb(255, 50, 105);
                outline-offset: 2px;
            }
            .count-btns button{
            margin:0px;
            border:none;
            background-color: rgb(255, 50, 105,0.1);
            cursor: pointer;
            }


        </style>
        ${this.state.count <= 0 ? `<div class="place_card_action">
        <button class="cart-btn">Add to Cart</button>
        </div>` : `<div class="count-btns">
        <button class="dec-btn" style="width:20%">-</button>
        <div style="width:60%;text-align:center">${this.state.count}</div>
        <button class="inc-btn" style="width:20%">+</button>
        </div>`
        }
        
        `;

        let navbar = document.querySelector('browser-router').shadowRoot.querySelector('nav-bar');
        if(this.state.count > 0){
            this.shadowRoot.querySelector('.dec-btn').addEventListener('click',(e)=>{
                e.preventDefault();
                navbar.setState({cartcount:navbar.state.cartcount - 1})
                this.setState({count:this.state.count-1})
            })
            this.shadowRoot.querySelector('.inc-btn').addEventListener('click',(e)=>{
                e.preventDefault();
                navbar.setState({cartcount:navbar.state.cartcount + 1})
                this.setState({count:this.state.count+1})
            })
        }else{
            this.shadowRoot.querySelector('.cart-btn').addEventListener('click',(e)=>{
                e.preventDefault();
                this.setState({count:1})
                navbar.setState({cartcount:navbar.state.cartcount + 1})
            })
        }
    }
}

customElements.define('cart-btn',CartBtn)