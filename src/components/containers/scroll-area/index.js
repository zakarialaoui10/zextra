import { ZextraUI } from '../../../constructor/zextra-ui.js';
import { call_with_optional_props } from 'ziko/ui';
import './index.css'
export class UIScrollArea extends ZextraUI{
    constructor({element = 'div'} = {}, ...items){
        super({element})
        this.setAttr({class : 'scroll-area'})
        // this.sx({
        //     // display : 'grid',
        //     // gridTemplateColumns : typeof cols === "number" ? `repeat(${cols}, 1fr)` : cols,
        //     display : 'flex',
        //     flexDirection : 'row',
        //     gap
        // })   
        this.append(...items)
    }
}
export const ScrollArea = call_with_optional_props(UIScrollArea)