import Leact from "./Leact.js";

export default class NavBar extends Leact {
  constructor() {
    super();
    this.state = {};
    //this.template = document.createElement('template')
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div style="height:100px;display:flex;align-items:center;border:1px solid black;background-image:linear-gradient(#74B2F9,#fff);">
        <style></style>
        <div style="display:flex;flex-direction:row;height:50px;border:1px solid blue;width:100%">
          <img style="height:30px;align-self:center" src="../primary-logo.svg" />
          <div>
            <div style="">Delivery in 7min</div>
            <div>Kavuri Hiils Rd........</div>
          </div>
          <div style="background-color:#fff;border-radius:8px;width:40%;display:flex;flex-direction:row;align-items:center;padding:10px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
           </svg>
            <span style="margin-left:12px">Search here..</span>
          </div>
          <div>
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
            <p>Profile</p>
          </div>
          <div style="position:relative">
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
            <div style="position:absolute;top:0;border-radius:40%; background-color:red;">
              <span style="padding:4px">3</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("nav-bar", NavBar);
