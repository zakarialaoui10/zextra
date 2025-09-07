import { UIElement } from "ziko/ui/index.js";
import { clamp } from 'ziko/math/utils/index.js'
class UIQView extends UIElement{
    constructor({score, func = Math.floor},wrapper, ...items){
        super()
        this.init(score, func, wrapper, ...items);
    }
    init(score, func, wrapper, ...items){
        super.init(wrapper.element);
        score = clamp(score, 0, 1);
        const count = func(items.length * score);
        wrapper.append(...items.splice(0, count))
        items.forEach(n=>n.unrender())
    }
}

const QView=({score}, wrapper, ...items)=>new UIQView({score}, wrapper, ...items);
export{
    UIQView, 
    QView
}