import { UIElement } from "ziko/ui";
import './index.css'
class UIDraggable extends UIElement{
    constructor(...items){
        super({element : 'div', name : 'draggable'})
        this.setAttr({
            class : 'zextra-draggable'
        })
        this.append(...items)
        this.dispose =  this.setup()
    }
    setup(){
        let wrapper = this.element;
        let rect = this.element.getBoundingClientRect()
        let startX = Math.round(rect.x), startY = Math.round(rect.y);
        let currentX = startX, currentY = startY;
        let dragging = false;

        const onPointerDown = (e) => {
            dragging = true;
            wrapper.setPointerCapture(e.pointerId);
            startX = e.clientX - currentX;
            startY = e.clientY - currentY;
            wrapper.style.transition = 'none';
        };

        const onPointerMove = (e) => {
            if (!dragging) return;
            currentX = e.clientX - startX;
            currentY = e.clientY - startY;
            wrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
        };

        const onPointerUp = (e) => {
            dragging = false;
            wrapper.releasePointerCapture(e.pointerId);
        };

        const onPointerCancel = () => {
            dragging = false;
        };

        wrapper.addEventListener('pointerdown', onPointerDown);
        wrapper.addEventListener('pointermove', onPointerMove);
        wrapper.addEventListener('pointerup', onPointerUp);
        wrapper.addEventListener('pointercancel', onPointerCancel);

        const dispose = () => {
            wrapper.removeEventListener('pointerdown', onPointerDown);
            wrapper.removeEventListener('pointermove', onPointerMove);
            wrapper.removeEventListener('pointerup', onPointerUp);
            wrapper.removeEventListener('pointercancel', onPointerCancel);
        };

        return dispose
    }
}

const Draggable = (...items) => new UIDraggable(...items);

export{
    UIDraggable,
    Draggable
}