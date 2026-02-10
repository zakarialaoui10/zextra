import { ZextraUI } from "../../../constructor/zextra-ui.js";
export class UIColumns extends ZextraUI{
    constructor({gap}, ...items){
        super({element : 'div'})
        this.sx({
            // display : 'grid',
            // gridTemplateColumns : typeof cols === "number" ? `repeat(${cols}, 1fr)` : cols,
            display : 'flex',
            flexDirection : 'row',
            gap
        })   
        this.append(...items)
    }
}
export const Columns = ({cols}, ...items) => new Columns({cols}, ...items)