import {p} from "ziko"
import { Modal } from "zextra/ui"

export default ()=>Modal(
    p("Hello From Zextra")
).style({
    margin : "10px 10px",
    width : "50vw",
    height : "50vh",
    placeItems : "center"
}).open()