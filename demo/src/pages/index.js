import { View, tags, Flex } from "ziko";
import { RatingInput } from 'zextra/inputs'
import { Content, Bleed, AspectRatio } from "zextra/containers";
import { Link } from 'zextra/nav'
import Heart from 'ziko-lucide/heart'
import Star from 'ziko-lucide/star'
// import ArrowUpRight from 'ziko-lucide/arrowupright'

globalThis.l = Link({
    href : '#',
    underline : true,
    // end_icon : ArrowUpRight({stroke : 'darkblue'})
}, "More Informations ... y..y.. ").style({
    border : '1px red solid',
    // margin : '50px auto',
})

globalThis.l = Link({
    href : '#',
    // end_icon : ArrowUpRight({stroke : 'darkblue'})
}, "Hello").style({
    border : '1px red solid',
    // margin : '50px auto',
})


{/* <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe> */}
// AspectRatio(
//     tags.iframe({src : "https://www.youtube.com/embed/dQw4w9WgXcQ"})
// )


// Flex(
//     Content(
//     tags.span('s1 ...'),
//     tags.span('s2 ...'),
//     tags.span('s3 ...')
//     ),
//     tags.span('s4 ...'),
//     Bleed("This is a bleed").style({
//         background : 'gold',
//         padding : '10px',
//         border : '2px darkblue solid'
//     })
// ).style({
//     border : '2px darkblue solid',
//     width : '300px',
//     padding : '20px',
//     margin : '30px auto'
// })
// .vertical(0, 0, 1)




// globalThis.r = RatingInput(
//     Heart({ stroke : 'none', fill : '#777'}),
//     Heart({ stroke : 'none', fill : '#777'}),
//     Heart({ stroke : 'none', fill : '#777'}),
//     Heart({ stroke : 'none', fill : '#777'}),
//     Star({ stroke : 'none', fill : '#777'})
// )

// View(
//     r,
//     tags.p("The current value is ", r.current_state)
// ).style({
//     position : 'absolute',
//     top : '50%',
//     left : '50%',
//     transform: 'translate(-50%, -50%)',
//     border : '2px #777 solid',
//     padding : '15px'
// })




// r.onChange(v=>console.log(v))
// r.on('value-changed', n => console.log(n.detail.value))

// import { Diff } from "zextra/containers";

// const src1 = 'https://picsum.photos/id/1015/800/400';
// const src2 = 'https://picsum.photos/id/1016/800/400';

// globalThis.d = Diff(
//     tags.img({src : src1}),
//     tags.img({src : src2}),
// ).style({
//     width : '80vw',
//     height : '400px'
// })
// import { tags, App, Flex } from "ziko"

// console.log(1)

// const {QueryParams} = __Ziko__
// export default ()=>{
//     return App({
//         head : {
//             title : "ziko",
//         },
//         wrapper : ()=>Flex(tags.p("Hello world").style({
//             color : QueryParams.color ?? "black"
//         })).size("100vw","100vh").vertical(0,0)
//     })
// }
// document.body.style.overflow = "hidden"
// // export default ()=>{
// //     return p("Hello from zikojs File based routing ").style({
// //         color:"red",
// //         fontFamily : "Gloria Hallelujah"
// //     })
// // }