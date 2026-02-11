import { Columns } from "zextra/layouts/columns";
import { tags } from "ziko/ui";

const {p} = tags

// globalThis.col = Columns(
//     p('p1'),
//     p('p2')
// )

// col.mount(document.body)

export default function App(){

    globalThis.col = Columns(
        p('p1'),
        p('p2')
    )

    return p('k')


}
// import { Flex } from "ziko";
// import {
//     Modal,
//     Collapsible
// } from "zextra/ui";
// import { h1, p } from "ziko";
// // Modal("kkdk").open().onClick(e=>e.target.close())
// export default ()=>Flex(
//     Collapsible(
//         "What is Zextra ?",
//         p("is a"),
//     )
// ).style({
//     border : "1px red solid"
// }).vertical(0, 0)