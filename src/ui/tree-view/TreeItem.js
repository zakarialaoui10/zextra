import { ZikoUIElement, tags } from "ziko/ui"
class ZikoUITreeItem extends ZikoUIElement{
    constructor({label = '', opened = false, href } = {}, ...items){
        super('li','tree-item')
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
        this.label_container.onKeyDown(e=>{
            if(e.kd === "Enter") this.toggle()
        })
        this.items = this.items_container.items;   
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
    isTreeItem(){
        return true
    }
    toggle(){
        this.cache.isOpened = !this.cache.isOpened;
        this.#maintain()
        return this;
    }
    get parent(){
        // To Check
        return super.parent.parent
    }
    level(){
        return {
           h :  this.parent.items.findIndex(n=>n == this) + 1,
           v : this.getLevel()
        }
    }
    getLevel() {
        let level = 1;
        let current = this.parent;
        while (current && current.isTreeItem && current.isTreeItem()) {
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
    getNumbering() {
    const numbers = [];
    // start from this node
    let node = this;
    while (node) {
      const parent = node.parent;           // likely the UL container
      if (!parent || !Array.isArray(parent.items)) break;
      const idx = parent.items.indexOf(node);
      if (idx === -1) break;                // can't find this node among parent's items -> stop
      // prepend the 1-based index
      numbers.unshift(idx + 1);
      // move up: parent.parent should be the LI (the owner TreeItem) or the TreeView root container
      node = parent.parent;
    }

    return numbers.length ? numbers.join('.') : '';
  }
}

const TreeItem = ({label, href, opened} = {}, ...items) => new ZikoUITreeItem({label, href, opened}, ...items);
export{
    ZikoUITreeItem,
    TreeItem
}
