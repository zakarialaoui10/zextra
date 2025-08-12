import { ZikoUIElement, tags } from "ziko/ui"
class ZikoTreeViewItem extends ZikoUIElement{
    constructor({label = '', opened = false, href } = {}, ...items){
        super("li","ziko-tree-view-item")
        Object.assign(this.cache,{
            isOpened : opened,
        })
        this.style({
            userSelect : 'none',
            lineHeight : '1.5'
        })
        this.setAttr({
            role : 'treeitem',
            tabindex : -1
        })
        this.arrow = tags.span('').style({
            display: 'inline-block',
            width: '1.2em',
            textAlign: 'center',
            fontWeight: 'bold',
            marginRight: '6px',
            transition: 'transform 0.15s ease'
        })
        this.label = href ? tags.a({href}, label) :  tags.span(label);
        this.label_container = tags.div(
            this.arrow, 
            this.label,
        ).style({
            display:'flex',
            alignItems: 'center',
            padding:'3px 6px',
            borderRadius: '4px',
            cursor: 'pointer'     
        }).setAttr({
            tabindex : 0,
            ariaLabel : label,
            role : 'presentation'
        })       
        this.items_container = tags.ul().style({
            listStyle: 'none',
            paddingLeft: '1.2em',
            margin: '0'            
        }).setAttr("role", "group")
        if(items.length > 0) this.items_container.append(...items);
        this.append(
            this.label_container,
            this.items_container
        )   
        this.#maintain()
        this.label_container.onPtrDown((e)=>{
            e.event.stopPropagation();        
            this.cache.isOpened = !this.cache.isOpened   
            this.#maintain()   
        })   
    }
    #maintain(){
        this.setAttr("aria-expanded", this.isOpened());
        if(this.hasItems()){
            this.arrow.element.textContent = this.isOpened() ? "-" : "+";
            this.items_container.style({
                display : this.isOpened() ? 'block' : 'none'
            })
        }
        else this.arrow.element.textContent = ''
    }
    isTreeViewItem(){
        return true
    }
    get parent(){
        // To Check
        return super.parent.parent
    }
    getLevel() {
        let level = 1;
        let current = this.parent;
        while (current && current.isTreeViewItem && current.isTreeViewItem()) {
            level++;
            current = current.parent;
        }        
        return level;
    }
    isOpened(){
        return this.cache.isOpened;
    }
    hasItems(){
        return this.items_container?.items.length > 0
    }
}

const TreeViewItem = ({label, href, opened} = {}, ...items) => new ZikoTreeViewItem({label, href, opened}, ...items);
export{
    ZikoTreeViewItem,
    TreeViewItem
}
