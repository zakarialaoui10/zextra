import { UIElement } from "ziko";
class UITabsPanel extends UIElement{
    constructor(){
        super({element : 'div', name : 'zextra_tabs_panel'})
        this.style({
            flex : '1',
            padding : '20px'
        })
    }
}