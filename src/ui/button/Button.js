import { UIElement } from "ziko/ui";

class ZextraUIButton extends UIElement{
    constructor(){
        super('button', 'zextra-button')
    }
}

const Button = () => new ZextraUIButton()

export{
    ZextraUIButton,
    Button
}