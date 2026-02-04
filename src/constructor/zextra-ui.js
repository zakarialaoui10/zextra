import { UIElement } from "ziko/ui";
import { throttle } from 'ziko/time'
import '../styles/conventions.css';
import { 
  ALIASES, 
  BREAKPOINTS 
} from "./consts.js";
import { 
  isResponsiveValue,
  transformValue,
  isSpacingProp
} from "./utils.js";

export class ZextraUI extends UIElement {
  sx(obj = {}) {
    const BASE_STYLES = {};
    const RESPONSIVE_PROPS = [];

    for (let key in obj) {
      const prop = ALIASES[key] ?? key;
      const value = obj[key];

      if(isResponsiveValue(value)){
          for(let key in value) 
            value[key] = transformValue(prop, value[key])
          RESPONSIVE_PROPS.push({ prop, values: value }) 
      }
      else BASE_STYLES[prop] = transformValue(prop, value);
    }
    this.style(BASE_STYLES);
    const PROPS_QUERIES = {
      base : {},
      xs : {},
      sm : {},
      md : {},
      lg : {},
      xl : {}
    }

    RESPONSIVE_PROPS.forEach(({prop, values}) => {
      for(let bp in values) {
        Object.assign(PROPS_QUERIES[bp], {[prop] : transformValue(prop, values[bp])})
      }
    })

    console.log({PROPS_QUERIES})

    var i=0
    this.onResizeView(
      throttle(()=>{
        const w = this.width;
        // console.log(w)
        for(let bp of ['xs', 'sm', 'md', 'lg', 'xl']){
          if(PROPS_QUERIES[bp] && w < BREAKPOINTS[bp]){
            console.log(i++, PROPS_QUERIES[bp])
            return this.style(PROPS_QUERIES[bp])
          } 
        }
        if(PROPS_QUERIES.base) return this.style(PROPS_QUERIES.base)
    }, 30))


  }
}