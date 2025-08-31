import { Collapsible, Accordion } from "zextra/surface";
import { Modal } from "zextra/dialog";
// import { Callout } from "../src/feedback";
import 'zextra/style'
import {  tags } from "ziko/ui";
import { HTMLWrapper } from "zextra/embed/html";

HTMLWrapper('<div>djjdj</div>')

// globalThis.s=tags.svg(
//     { viewBox:"0 0 24 24", width:"20", height:"20", ariaHidden:"true" },
//     tags.path({
//         fill:"currentColor",
//         d:"M12 2a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0V7H9a1 1 0 1 1 0-2h2V3a1 1 0 0 1 1-1Zm-7 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H8Z"
//     })
// )
globalThis.c1 = Collapsible(
    'Summary 1', 
    tags.pre({},`
        ddkd
        jdjd
        djdjd
        jdjdo
        `)
)
globalThis.c2 = Collapsible(
    'Summary 2', 
    tags.pre({},`
        ddkd
        jdjd
        djdjd
        jdjdo
        `)
)

globalThis.a=Accordion({},
    c1,
    c2
)
globalThis.m = Modal(a)