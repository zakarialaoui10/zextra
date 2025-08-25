import { UIElement } from "ziko";
class __ZikoUISplitter__ extends UIElement{
    constructor(flexDirection, resizerCursor, resizerProp){
        super("div", "Splitter")
        Object.assign(this.cache,{
            isResizing : false,
            flexDirection,
            resizerCursor,
            resizerProp
        })
        this.style({
            display:"flex",
            flexDirection : this.cache.flexDirection,
            border: "2px solid #333",
            overflow: "hidden"
        })
        this.resizer = new UIElement("div", "resizer").style({
            [this.cache.resizerProp]:"5px",
            backgroundColor: "gold",
            cursor: this.cache.resizerCursor,
            touchAction: "none", 
        });
        this.onPtrDown(e=>{
            this.cache.isResizing = true;
            this.style({
                cursor : this.cache.resizerCursor // ns-resize
            });
            this.resizer.element.setPointerCapture(e.event.pointerId);
        })
        this.onPtrUp(e=>{
            this.cache.isResizing = false;
            this.style({
                cursor: "default"
            })
            this.resizer.element.releasePointerCapture(e.event.pointerId);
        })
        this.onPtrCancel(()=>{
            this.cache.isResizing = false;
            this.style({
                cursor: "default"
            })
        })
        this.onPtrOut(()=>{
            if (this.cache.isResizing) {
                this.cache.isResizing = false;
                this.style({
                    cursor: "default"
                })
            }
        })
    }
    get isSplitter(){
        return true;
      }
    styleResizer(style={}){
        this.resizer.style(style);
        return this;
    }
}
export{
    __ZikoUISplitter__
}