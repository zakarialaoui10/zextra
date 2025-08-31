import { Collapsible, Accordion } from "zextra/surface";
import { Modal } from "zextra/dialog";
import 'zextra/style'
import { tags } from "ziko/ui";

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