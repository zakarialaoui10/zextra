import { UIElement } from "ziko";
class UITabs extends UIElement{
    constructor(Controller, Panel, {orientation = 'vertical'} = {}){
        super({element : 'div', name : 'zextra_tabs'});
        this.controller = Controller;
        this.pannel = Panel;
        this.style({
            display : 'flex',
            flexDirection : 'column',
            border : '1px solid #ccc'
        });
        this.append(
            this.controller, 
            this.pannel
        )      
    }
    next(){

    }
    previous(){

    }
    goto(){

    }
}

const Tabs = (Controller, Pannel, {orientation = 'vertical'} = {}) => new UITabs
export{
    UITabs, 
    Tabs
}