import { __UISplitter__ } from "./__splitter__.js";
class UIHSplitter extends __UISplitter__{
    constructor(leftPane, rightPane){
        super("row", "ew-resize", "width")
        this.leftPane = leftPane.style({
            width:"50%",
            flexGrow: 1,
            overflow: "hidden"
        });
        this.rightPane = rightPane.style({
            width:"50%",
            flexGrow: 1,
            overflow: "hidden"
        });
        this.element?.append(
            this.leftPane.element,
            this.resizer.element,
            this.rightPane.element
        );
        this.onPtrMove(e=>{
            if (!this.cache.isResizing) return;
            const containerWidth = this.element.getBoundingClientRect().width; // height
            const pointerRelativeXpos = e.event.clientX - this.element.getBoundingClientRect().x; // y
            let newLeftPaneWidth = (pointerRelativeXpos / containerWidth) * 100;
            let newRightPaneWidth = 100 - newLeftPaneWidth;
            if (newLeftPaneWidth < 0) newLeftPaneWidth = 0;
            if (newRightPaneWidth < 0) newRightPaneWidth = 0;
            this.leftPane.element.style.width = `${newLeftPaneWidth}%`;
            this.rightPane.element.style.width = `${newRightPaneWidth}%`;
        })
    }
    get isHorizontalSplitter(){
        return true;
      }
}
const HSplitter=(leftPane, rightPane)=>new UIHSplitter(leftPane, rightPane);
export{
    UIHSplitter,
    HSplitter
}