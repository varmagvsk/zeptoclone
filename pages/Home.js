import Leact from "../components/Leact.js";
import Spinner from "../components/Spinner.js";
import CartBtn from "../components/Cartbtn.js";
import ProductCard from "../components/ProductCard.js";
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
                //console.log(data)
                let i = 0;
                data.prodlist.forEach((product)=>{
                    product.selected = false;
                    product.cartcount = 0
                    
                })
                console.log('data fetched')
                //console.log(data.prodlist)
                this.setState({loading:false,products:data.prodlist})
            }
        })
    }

    renderProducts(){
        let prodctCards = '';
        this.state.products.forEach((product)=>{
            prodctCards = prodctCards + `<product-card id='${product.id}' ></product-card>`
        })
        return prodctCards
    }

    mapProductsData = ()=>{
        console.log("shadowRoot")
        console.dir(this.shadowRoot)
        console.log("productsData",this.state.products)
        this.state.products.forEach((product)=>{
            let productCard = this.shadowRoot.querySelector(`#${CSS.escape(product.id)}`)
            productCard.data = product
            productCard.setState({dataReceived:true})
        })

    }

    render(){
        this.shadowRoot.innerHTML = this.state.loading ? `<loading-spinner style="margin-left:35%"></loading-spinner>` :  `
        <div class='products' style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center">
        ${this.renderProducts()}        
        </div>
        `
        this.mapProductsData();
    }
}

customElements.define("home-page",Home)