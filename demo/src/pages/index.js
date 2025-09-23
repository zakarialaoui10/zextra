import { tags, App, Flex } from "ziko"

console.log(1)

const {QueryParams} = __Ziko__
export default ()=>{
    return App({
        head : {
            title : "ziko",
        },
        wrapper : ()=>Flex(tags.p("Hello world").style({
            color : QueryParams.color ?? "black"
        })).size("100vw","100vh").vertical(0,0)
    })
}
document.body.style.overflow = "hidden"
// export default ()=>{
//     return p("Hello from zikojs File based routing ").style({
//         color:"red",
//         fontFamily : "Gloria Hallelujah"
//     })
// }