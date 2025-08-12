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
            Object.assign(item.cache, { numbering: numberingString });            
            if (item.items && item.items.length > 0) {
                processItems(item.items, newPath);
            }
        });
    }
    processItems(this.items);
}
    
}

const TreeView = (...TreeItems) => new ZikoUITreeView(...TreeItems);

function setNumbering(treeView) {
    if (!treeView.isTreeView) return;
    
    function processItems(items, currentPath = []) {
        items.forEach((item, index) => {
            if (!item.isTreeItem) return;
            
            const newPath = [...currentPath, index + 1];
            const numberingString = newPath.join('.');
            
            // Add numbering to cache
            Object.assign(item.cache, { numbering: numberingString });
            
            // Process child items if they exist
            if (item.items && item.items.length > 0) {
                processItems(item.items, newPath);
            }
        });
    }
    
    processItems(treeView.items);
}
export{
    ZikoUITreeView,
    TreeView
}