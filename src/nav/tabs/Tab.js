import { UIElement } from "ziko";
class Tab extends UIElement{
    constructor(){
        super({element : 'div', name : 'zextra_tab'})
        this.syle({
            cursor : 'pointer', 
            userSelect : 'none',
            position : 'relative',
            padding : '10px 20px'
        })
    }
}