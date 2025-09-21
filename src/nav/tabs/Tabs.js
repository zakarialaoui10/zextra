import { UIElement } from "ziko/ui";
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
        Object.assign(this.cache,{
            active_index : null
        })
        this.update() 
    }
    // init(element, name, type, render){
    //   super.init(element, name, type, render);
      
    //   return this;
    // }
    update(){
        this.tabs.forEach((tab, i) => {
        tab.onClick(() => this.activate(i));
      });
    }
    get tabs(){
        return this.controller.items
    }
    get activeIndex(){
        return this.cache.active_index
    }
    get activeTab(){
        return this.cache.active_tab
    }
    get activePanel(){
        return this.cache.active_panel
    }
    activate(index){
        if(this.activeIndex === index) return this;
        Object.assign(this.cache,{
            active_index : index,
            active_tab : this.tabs[index],
            active_panel : this.pannel[index]
        })
        this.pannel.forEach(n=>n.style({display : 'none'}))
        this.pannel[index].style({display : 'block'})
        console.log(index)
    }
    next(){

    }
    previous(){

    }
    goto(){

    }
}

const Tabs = (Controller, Pannel, {orientation = 'vertical'} = {}) => new UITabs(Controller, Pannel, {orientation})
export{
    UITabs, 
    Tabs
}