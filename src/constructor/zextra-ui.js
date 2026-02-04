import { UIElement } from "ziko/ui";
import { mapfun } from 'ziko/math'
// import { useMediaQuery } from "ziko/hooks";
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

    // 1️⃣ Separate base styles and responsive props
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

    // 2️⃣ Apply base styles immediately
    this.style(BASE_STYLES);
    // console.log(RESPONSIVE_PROPS);

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

    // console.log({PROPS_QUERIES})

    this.onResizeView(e => {
      const w = e.target.width
      if(PROPS_QUERIES.xs && w < BREAKPOINTS.xs) return this.style(PROPS_QUERIES.xs)
      if(PROPS_QUERIES.sm && w < BREAKPOINTS.sm) return this.style(PROPS_QUERIES.sm)
      if(PROPS_QUERIES.md && w < BREAKPOINTS.md) return this.style(PROPS_QUERIES.md)
      if(PROPS_QUERIES.lg && w < BREAKPOINTS.lg) return this.style(PROPS_QUERIES.lg)
      if(PROPS_QUERIES.xl && w < BREAKPOINTS.xl) return this.style(PROPS_QUERIES.xl)
    })


    // console.log(PROPS_QUERIES)

  }
}



