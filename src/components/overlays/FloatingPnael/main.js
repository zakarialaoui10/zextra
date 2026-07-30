import { UIElement, call_with_optional_props, tags} from 'ziko/dom';

const {
    div,
    button,
    svg,
    line,
    rect
} = tags;

import { X } from 'ziko-lucide/X';
import { Minus } from 'ziko-lucide/Minus'

const ICONS = {
    maximize: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
    restore: '<rect x="8" y="4" width="12" height="12" rx="2"></rect><path d="M4 8v12a2 2 0 0 0 2 2h12"></path>'
};

export class UIFloatingPanel extends UIElement{
    constructor(){
        super({element : 'div'});
        this.setAttr({ class : 'floating-panel'})

        this.panel_header = div(
            {class: 'panel-header', id: 'panelHeader'},
            div({class: 'panel-title'},'Floating Panel'),
            div({class: 'panel-controls'},
                button({class: 'ctrl-btn', id: 'reduceBtn', title: 'Reduce'},
                    Minus()
                ).onClick(()=> this.toggleReduce()),
                button({class: 'ctrl-btn', id: 'extendBtn', title: 'Extend to full size'},
                    svg({id: 'extendIcon', viewBox: '0 0 24 24'},
                    rect({'x': '3', 'y': '3', width: '18', height: '18', rx: '2', ry: '2'}),
                    ),
                ).onClick(()=> this.toggleExtend()),
                button({class: 'ctrl-btn', id: 'closeBtn', title: 'Close'},
                  X(),
                ).onClick(()=> this.close()),
            ),
        ).onPtrDown(e => this.startDrag(e.event))

        this.panel_body = div({class: 'panel-body'}, 'Body');

        this.append(
            this.panel_header, 
            this.panel_body,
            div({class: 'resize-handle n', 'data-axis': 'n'}),
            div({class: 'resize-handle s', 'data-axis': 's'}),
            div({class: 'resize-handle e', 'data-axis': 'e'}),
            div({class: 'resize-handle w', 'data-axis': 'w'}),
            div({class: 'resize-handle ne', 'data-axis': 'ne'}),
            div({class: 'resize-handle nw', 'data-axis': 'nw'}),
            div({class: 'resize-handle se', 'data-axis': 'se'}),
            div({class: 'resize-handle sw', 'data-axis': 'sw'}),
        )

        this.isDragging = false;
        this.isResizing = false;
        this.isMinimized = false;
        this.isMaximized = false;

        this.dragOffset = { x: 0, y: 0 };
        this.resizeState = null;

        this.normalRect = {
          left: (window.innerWidth - 380) / 2,
          top: (window.innerHeight - 260) / 2,
          width: 380,
          height: 260
        };

        // TEMP
        this.extendIcon = document.getElementById('extendIcon');

        const handles = this.element.querySelectorAll('.resize-handle');
        handles.forEach(handle => {
          handle.addEventListener('pointerdown', (e) => this.startResize(e, handle.dataset.axis));
        });

        // Global pointer events
        document.addEventListener('pointermove', (e) => {
          if (this.isDragging) this.drag(e);
          if (this.isResizing) this.resize(e);
        });

        document.addEventListener('pointerup', () => {
          this.isDragging = false;
          this.isResizing = false;
        });
        


    }

    open(){
        if(!this.element.classList.contains('open')) this.style({
            left : `${this.normalRect.left}px`,
            top : `${this.normalRect.top}px`,
            width : `${this.normalRect.width}px`,
            bottom : `${this.normalRect.height}px`
        })
        this.element.classList.add('open');
        return this;
    }
    close(){
        this.element.classList.remove('open');
        return this;
    }
    toggleReduce() {
        this.isMinimized = !this.isMinimized;
        if (this.isMinimized) {
          if (this.isMaximized) this.toggleExtend();
          this.element.classList.add('minimized');
        } 
        else this.element.classList.remove('minimized');
        return this;
    }
    toggleExtend() {
        this.triggerAnimation();
        this.isMaximized = !this.isMaximized;

        if (this.isMaximized) {
          if (this.isMinimized) {
            this.isMinimized = false;
            this.element.classList.remove('minimized');
          }
          const rect = this.element.getBoundingClientRect();
          this.normalRect = {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
          };
          this.element.classList.add('maximized');
        //   this.extendIcon.innerHTML = ICONS.restore;
        //   this.extendBtn.title = 'Restore size';
        } else {
          this.element.classList.remove('maximized');
          this.element.style.left = `${this.normalRect.left}px`;
          this.element.style.top = `${this.normalRect.top}px`;
          this.element.style.width = `${this.normalRect.width}px`;
          this.element.style.height = `${this.normalRect.height}px`;
        //   this.extendIcon.innerHTML = ICONS.maximize;
        //   this.extendBtn.title = 'Extend to full size';
        }
    }
    triggerAnimation() {
        this.element.classList.add('animating');
        setTimeout(() => this.element.classList.remove('animating'), 200);
    }
    startDrag(e) {
        if (e.target.closest('.ctrl-btn') || this.isMaximized) return;
        this.isDragging = true;
        // Capture pointer so we keep receiving events even outside the element
        this.panel_header.element.setPointerCapture(e.pointerId);

        const rect = this.element.getBoundingClientRect();
        this.dragOffset.x = e.clientX - rect.left;
        this.dragOffset.y = e.clientY - rect.top;
      }

      drag(e) {
        let x = e.clientX - this.dragOffset.x;
        let y = e.clientY - this.dragOffset.y;

        x = Math.max(0, Math.min(x, window.innerWidth - this.element.offsetWidth));
        y = Math.max(0, Math.min(y, window.innerHeight - this.element.offsetHeight));

        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
      }
      startResize(e, axis) {
        e.stopPropagation();
        if (this.isMinimized || this.isMaximized) return;

        this.isResizing = true;
        // Capture pointer so resize works even if finger/mouse leaves the handle
        e.target.setPointerCapture(e.pointerId);

        const rect = this.element.getBoundingClientRect();
        this.resizeState = {
          axis,
          startX: e.clientX,
          startY: e.clientY,
          startWidth: rect.width,
          startHeight: rect.height,
          startLeft: rect.left,
          startTop: rect.top
        };
      }

      resize(e) {
        const { axis, startX, startY, startWidth, startHeight, startLeft, startTop } = this.resizeState;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startLeft;
        let newTop = startTop;

        const minW = 260;
        const minH = 140;

        if (axis.includes('e')) newWidth = Math.max(minW, startWidth + dx);
        if (axis.includes('s')) newHeight = Math.max(minH, startHeight + dy);

        if (axis.includes('w')) {
          const possibleW = startWidth - dx;
          if (possibleW > minW) {
            newWidth = possibleW;
            newLeft = startLeft + dx;
          }
        }

        if (axis.includes('n')) {
          const possibleH = startHeight - dy;
          if (possibleH > minH) {
            newHeight = possibleH;
            newTop = startTop + dy;
          }
        }

        this.element.style.width = `${newWidth}px`;
        this.element.style.height = `${newHeight}px`;
        this.element.style.left = `${newLeft}px`;
        this.element.style.top = `${newTop}px`;
      }
}

export const FloatingPanel = call_with_optional_props(UIFloatingPanel);





div({class: 'floating-panel', id: 'floatingPanel'},
   div({class: 'panel-header', id: 'panelHeader'},
      div({class: 'panel-title'},'Floating Panel'),
      div({class: 'panel-controls'},
         button({class: 'ctrl-btn', id: 'reduceBtn', title: 'Reduce'},
            svg({viewBox: '0 0 24 24'},
               line({x1: '5', y1: '12', x2: '19', y2: '12'}),
            ),
         ),
         button({class: 'ctrl-btn', id: 'extendBtn', title: 'Extend to full size'},
            svg({id: 'extendIcon', viewBox: '0 0 24 24'},
               rect({'x': '3', 'y': '3', width: '18', height: '18', rx: '2', ry: '2'}),
            ),
         ),
         button({class: 'ctrl-btn', id: 'closeBtn', title: 'Close'},
            svg({viewBox: '0 0 24 24'},
               line({x1: '18', y1: '6', x2: '6', y2: '18'}),
               line({x1: '6', y1: '6', x2: '18', y2: '18'}),
            ),
         ),
      ),
   ),
   div({class: 'panel-body'},
      // BODY
   ),
   div({class: 'resize-handle n', 'data-axis': 'n'}),
   div({class: 'resize-handle s', 'data-axis': 's'}),
   div({class: 'resize-handle e', 'data-axis': 'e'}),
   div({class: 'resize-handle w', 'data-axis': 'w'}),
   div({class: 'resize-handle ne', 'data-axis': 'ne'}),
   div({class: 'resize-handle nw', 'data-axis': 'nw'}),
   div({class: 'resize-handle se', 'data-axis': 'se'}),
   div({class: 'resize-handle sw', 'data-axis': 'sw'}),
)
