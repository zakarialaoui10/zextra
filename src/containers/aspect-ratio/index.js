import { UIElement, View } from "ziko/ui";
import './index.css'

class UIAspectRatio extends UIElement{
    constructor(item, {ratio}){
        super({element : 'div', name : 'aspect_ratio'})
        Object.assign(this.cache, { ratio })
        this.style({
            aspectRatio : '1.33/1',
            // aspectRatio : '4/3'
        })
        this.setAttr({
            class : 'aspect-ratio'
        })
        this.append(item)
    }
    get ratio(){
        return this.cache.ratio;
    }
}

const AspectRatio = (item, {ratio = '1:1'} = {}) => new UIAspectRatio(item, { ratio })
export{
    UIAspectRatio,
    AspectRatio
}