import { UIElement } from "ziko";
class UITabsController extends UIElement{
    constructor(...Tab){
        super({element : 'div', name : 'zextra_tabs_controller'})
        this.style({
            display : 'flex',
            position : 'relative'
        })
        this.append(...Tab)
    }
}

const TabsController = (...Tab) => new UITabsController(...Tab)
export{
    TabsController,
    UITabsController
}