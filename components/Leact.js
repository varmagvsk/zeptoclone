export default class Leact extends HTMLElement{
    constructor(){
        super();
        this.state ={

        }
    }

    setState(obj){
        this.state = {...this.state,...obj}
        this.render()
    }

    render(){

    }
}