import Leact from "./Leact.js";
import CartBtn from "./Cartbtn.js";

export default class ProductCard extends Leact{

    constructor(){
        super();
        this.state = {
            dataReceived: false
        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        let product = {}
        if(this.state.dataReceived) {
            product = this.product
        }
        this.shadowRoot.innerHTML = this.state.dataReceived ? `<div>
            
            <style>

                    
            /* Places card */




            .content_container {
                width: 80%;
                margin: auto;
                display: flex;
                justify-content: space-evenly;
                align-items: self-start;
                flex-wrap: wrap;
                gap: 15px;

                
            }


            .place_card {
                width: 150px;
                /*height: 150px;*/
                margin-left: 10px;
                margin-bottom: 20px;
                background: #fff;
                /* box-shadow: 0 0 10px rgb(0, 0, 0, 0.2); */
            }

            .place_card_image{
                width: 100%;
                overflow: hidden;
                border-radius: 10px;
                border: 0.5px solid grey;
            }

            .place_card_image img {
                width: 100%;
                height: 100%;
                /* border-radius: 5px 5px 0 0; */
                aspect-ratio: 1/1;
                transition: .4s;
                cursor: pointer;
            }

            .place_card_image img:hover{
                transform: scale(1.2);
            }


            .place_card_content {
                /* padding: 20px; */
                /* overflow: hidden; */
                
            }

            .place_card_content span {
                font-size: 16px;
                font-weight: 600;
            }

            .place_card_content p {
                /* margin-top: 10px; */
                /* overflow: auto; */
            }


                </style>
            
            
            <div class="place_card">
                <div class="place_card_image">
                <img src="${product.prdimg}" />
                </div>
                <div class="place_card_content">
                    <span>${product.langpref} - ${product.proditems[0].size}</span>
                    <p>₹${product.proditems[0].price}</p>
                </div>
                <cart-btn style="" selected="${product.selected}" cartcount="${product.cartcount}"></cart-btn>
            </div>
            
            </div>` : '<div></div>'
    }
}
customElements.define('product-card',ProductCard)