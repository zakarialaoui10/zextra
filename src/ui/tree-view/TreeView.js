import {ZikoUIElement} from 'ziko'
class ZikoUITreeView extends ZikoUIElement{
    constructor(...TreeItems){
        super('ul','tree-view')
        this.setAttr({
            role : 'tree',
            tabindex : 0
        })
        this.style({
            listStyle : 'none',
            paddingLeft : '1.2em',
            margin : 0,
            overflow : 'auto',
        })
        this.append(...TreeItems)
        this.updateNumbering()
    }
    isTreeView(){
        return true;
    }
    updateNumbering() {    
        function processItems(items, currentPath = []) {
            items.forEach((item, index) => {
                if (!item.isTreeItem) return;
                const newPath = [...currentPath, index + 1];
                const numberingString = newPath.join('.');
                Object.assign(item.cache, { numbering: `${numberingString}.\u00A0` });  
                item.numbering.element.textContent = item.cache?.numbering; // Find Other Way           
                if (item.items && item.items.length > 0) {
                    processItems(item.items, newPath);
                }
            });
        }
        processItems(this.items);
    }   
}

const TreeView = (...TreeItems) => new ZikoUITreeView(...TreeItems);

export{
    ZikoUITreeView,
    TreeView
}