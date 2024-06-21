import Leact from "./Leact.js";

export default class NavBar extends Leact {
  constructor() {
    super();
    this.state = {
      cartcount: 0

    };
    //this.template = document.createElement('template')
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div>
      <style>


      *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
      font-weight: 350;
      font-style: normal;
      }
      
      .header_container {
      width:100%;
      background: linear-gradient(180deg, #74b4fc, #cbe2fe);
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid #d1c0c0;
      /* color: #000000; */
      position: absolute;
      top: 0px;
      left: 0px
      
      }
      
      .header_container_heading {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 5px;
      height: 86px;
      
      }
      
      
      
      .heading img{
      width: 130px;
      color:#950edb;
      font-family: "Josefin Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight:700;
      font-style: normal;
      padding-left: 40px;
      cursor: pointer;
      
      
      }
      
      .header_location{
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      }
      
      .header_location_details span{
      font-size: 16px;
      font-weight: 700;
      }
      
      .header_location_icon{
      color:#950edb;
      }
      
      .header_location_details b{
      font-size: 16px;
      }
      
      .header_search{
      display: flex;
      align-items: center;
      flex: 1;
      }
      
      .header_search_icon{
      width: 50px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      border-radius: 5px 0 0 5px;
      }
      // .header_search_icon svg{
      //     color:#950edb; 
      // }
      
      .header_search_textbox{
      width: 100%;
      }
      
      .header_search_textbox input{
      height: 40px;
      width: 100%;
      border: none;
      outline: none;
      padding-left: 10px;
      font-size: 16px;
      border-radius: 0 5px 5px 0;
      
      }
      
      .header_login_cart{
      display: flex;
      align-items: center;
      gap: 10px;
      }
      
      .header_cart span:nth-child(3){
      color: white;
      width: 20px;
      font-size: 16px;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      background-color: #950edb;
      position: absolute;
      top: 12px;
      right: 12px;
      
      }
      
      
      
      
      
      .header_login,
      .header_cart {
      display: flex;
      align-items: center;
      justify-content:center;
      flex-direction: column;
      width: 70px;
      gap: 5px;
      }
      
      .header_login:hover,
      .header_cart:hover,
      .header_location:hover{
      outline: 1px solid #181818;
      border-radius:3px ;
      cursor: pointer;
      }
      
      </style>
        <div class="header_container">
          <div class="header_container_heading">
            <div class="heading">
              <img
                src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/10.14.0/images/header/primary-logo.svg"
                alt=""
                class='logo-img'
              />
            </div>
            <div class="header_location">
              <div class="header_location_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </div>
              <div class="header_location_details">
                <span>Delevery in 8 Mins</span>
                <br />
                <b>Update location</b>
              </div>
            </div>
          </div>
          <div class="header_search">
            <div class="header_search_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <div class="header_search_textbox">
              <input type="text" name="search" placeholder="Search for" />
            </div>
          </div>
          <div class="header_login_cart">
            <div class="header_login"  goto='/account'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <span>Profile</span>
            </div>
            <div class="header_cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <span>Cart</span>
              <span>${this.state.cartcount}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    this.shadowRoot.querySelector('.header_login').addEventListener('click',(e)=>{
      let href = e.currentTarget.getAttribute('goto')
      console.log(href)
      history.pushState({},"",href);
      let router = document.querySelector('browser-router');
      //console.log(router)
      router.routerHandler();
    })

    this.shadowRoot.querySelector('.logo-img').addEventListener('click',(e)=>{
      history.pushState({},"",'/');
      let router = document.querySelector('browser-router');
      //console.log(router)
      router.routerHandler();
    })

    this.shadowRoot.querySelector('.header_cart').addEventListener('click',(e)=>{
      let router = document.querySelector('browser-router')
      router.setState({showCart:true})
    })
  }
}

customElements.define("nav-bar", NavBar);
