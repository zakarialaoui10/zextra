import {UIElement, map} from 'ziko'
class UIFab extends UIElement{
    constructor(text, x, y){
        super({element : 'button', name : 'zextra_fab'})
        this.element.innerText = text
        this.style({
            position : 'absolute'
        })
        this.pos(x, y)
    }
    pos(x, y){
        this.style({
            left : map(x, -1, 1, 0, 100) + '%',
            top : map(y, -1, 1, 100, 0) + '%',
            transformOrigin: 'center center',
            transform: 'translate(-50%, -50%)'
        })
    }
}

const Fab = (text, x, y) => new UIFab(text, x, y)
export{
    Fab, 
    UIFab
}