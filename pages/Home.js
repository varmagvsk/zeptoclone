import Leact from "../components/Leact.js";
import Spinner from "../components/Spinner.js";

export default class Home extends Leact{
    constructor(){
        super()
        this.state = {
            loading: true,
            products: [],
        }
        this.attachShadow({mode:"open"})
        this.render();
    }

    //after component mounted
    connectedCallback(){
        fetch("https://marvij.com/meatstore/appapi/index.php/allprodlist",{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                orgid: "9GZMP1618460747",
                langpref: "English"
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.code == '999'){
                console.log(data)
                this.setState({loading:false,products:data.prodlist})
            }
        })
    }

    renderProducts(){
        let prodctCard = '';

        this.state.products.forEach((product)=>{
            prodctCard += `<div>
            
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


            .place_card_action {
                padding: 10px;
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

                </style>
            
            
            <div class="place_card">
                <div class="place_card_image">
                <img src="${product.prdimg}" />
                </div>
                <div class="place_card_content">
                    <span>${product.langpref} - ${product.proditems[0].size}</span>
                    <p>₹${product.proditems[0].price}</p>
                </div>
                <div class="place_card_action">
                    <button>Add to Cart</button>
                </div>
            </div>
            
            </div>`
        })

        return prodctCard
    }

    render(){
        this.shadowRoot.innerHTML = this.state.loading ? `<loading-spinner style="margin-left:35%"></loading-spinner>` :  `
        <div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center">
        ${this.renderProducts()}      
        
        </div>
        `
    }
}

customElements.define("home-page",Home)