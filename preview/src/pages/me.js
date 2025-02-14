import { Flex } from "ziko";
import {
    Modal,
    Collapsible
} from "zextra/ui";
import { h1, p } from "ziko";
// Modal("kkdk").open().onClick(e=>e.target.close())
export default ()=>Flex(
    Collapsible(
        "What is Zextra ?",
        p("is a"),
    )
).style({
    border : "1px red solid"
}).vertical(0, 0)