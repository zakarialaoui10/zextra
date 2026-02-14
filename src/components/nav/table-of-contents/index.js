import { ZextraUI } from '../../../constructor/zextra-ui.js';
import './index.css';
import { tags, call_with_optional_props, UIElement } from 'ziko/ui';

const { ul, li, a } = tags;

export class UITableOfContents extends ZextraUI {
    constructor({ content = document.body, depth = 6, labelFn } = {}) {
        super({ element: 'nav' });

        this.setAttr({
            class: 'zextra-toc'
        });

        this.content = content instanceof UIElement ? content.element : content;
        this.toc_list = ul();
        this.depth = depth;
        this.labelFn = labelFn;

        this.append(this.toc_list);

        requestAnimationFrame(() => this.#setup());
    }

    #getSelector() {
        if (Array.isArray(this.depth)) return this.depth.map(d => `h${d}`).join(', ');
        const max = Math.min(Math.max(this.depth, 1), 6);
        return Array.from({ length: max }, (_, i) => `h${i + 1}`).join(', ');
    }
    #setup() {
        const selector = this.#getSelector();
        const headings = this.content.querySelectorAll(selector);
        headings.forEach((heading, i) => {
            if (!heading.id) heading.id = `heading-${i + 1}`;
            const level = parseInt(heading.tagName[1]);
            // Normalize depth into ordered array
            const levels = Array.isArray(this.depth)
                ? [...this.depth].sort((a, b) => a - b)
                : Array.from({ length: this.depth }, (_, i) => i + 1);
            const relativeIndex = levels.indexOf(level);
            const label = this.labelFn
                ? this.labelFn(heading, level)
                : heading.textContent;
            li({},
                a({ href: `#${heading.id}` }, label)
            )
            .style({
                marginLeft: `${relativeIndex * 15}px`
            })
            .mount(this.toc_list);
        });
    }
}

export const TableOfContents = call_with_optional_props(UITableOfContents);
