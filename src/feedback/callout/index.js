import { UIElement } from "ziko/ui";
import svg from '../icons/note.svg'
import { SVGWrapper} from 'ziko/ui'

globalThis.ss = SVGWrapper(svg)

class UICallout extends UIElement{
    constructor({type = 'default', emoji}, content){
        super({element : 'div', name : 'callout'})
        this.append(

        )
    }
}


const Callout = ({type, emoji}, content) => {
    return new UICallout({type, emoji}, content)
}

export{
    Callout, 
    UICallout
}
