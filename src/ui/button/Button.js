import { ZikoUIElement, } from "ziko/ui";

class ZextraUIButton extends ZikoUIElement{
    constructor(){
        super('button', 'zextra-button')
    }
}

const Button = () => new ZextraUIButton()

export{
    ZextraUIButton,
    Button
}