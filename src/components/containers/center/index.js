import { UIElement } from "ziko/ui";
import './index.css'

class UICenter extends UIElement{
    constructor(...items){
        super({ element : 'div', name : 'center'})
        this.append(...items).setAttr({class : 'zextra-center'}).style({ 
            border : '2px dotted darkblue'
        })
    }
}

const Center = (...items) => new UICenter( ...items);
export{
    UICenter,
    Center
}