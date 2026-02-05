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
    const RESPONSIVE_PROPS = {};

    for (let key in obj) {
      const prop = ALIASES[key] ?? key;
      const value = obj[key];
      if(isResponsiveValue(value)){
        const transformed = {}
          for(let key in value) 
            transformed[key] = transformValue(prop, value[key])
          RESPONSIVE_PROPS[prop] = transformed 
      }
      else BASE_STYLES[prop] = transformValue(prop, value);
    }
    this.style(BASE_STYLES);

    const BREAKPOINT_STYLES  = {
      xs : {},
      sm : {},
      md : {},
      lg : {},
      xl : {}
    }

    const BP = ['xs', 'sm', 'md', 'lg', 'xl'] 

    for(let prop in RESPONSIVE_PROPS){
      for(let bp of BP){
        BREAKPOINT_STYLES [bp][prop] = RESPONSIVE_PROPS[prop][bp] ?? RESPONSIVE_PROPS[prop]['base'] ?? ''
      }
    }

    this.onResizeView(
        throttle(()=>{
          const w = this.width;
          for(let bp of BP){
            if(BREAKPOINT_STYLES [bp] && w < BREAKPOINTS[bp]){
              return this.style(BREAKPOINT_STYLES [bp])
            } 
          }
      }, 30))

  }
}