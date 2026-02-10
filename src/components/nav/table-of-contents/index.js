import { ZextraUI } from '../../../constructor/zextra-ui.js';
import './index.css';
import { tags } from 'ziko/ui';
const { input, ul, li, a} = tags
export class UITableOfContents extends ZextraUI{
    constructor({content = document.body, depth, labelFn} = {}){
        super({element : 'nav'})
        this.setAttr({
            class : 'zextra-toc'
        })
        this.content = content;
        this.toc_list = ul();
        this.depth = depth;
        this.labelFn = labelFn;
        this.append(this.toc_list)
        requestAnimationFrame(()=>this.setup())
    }
    setup(){
        const headings = this.content.querySelectorAll('h1, h2, h3, h4, h5, h6')
        headings.forEach((heading, i)=>{
            if(!heading.id) heading.id = `heading-${i+1}`;
            const item = li({},
                a({href : `#${heading.id}`}, heading.textContent)
            )
            .style({
                marginLeft : `${(parseInt(heading.tagName[1]) - 1) * 15}px`
            })
            .mount(this.toc_list)
        })
    }
}
export const TableOfContents = () =>new UITableOfContents()