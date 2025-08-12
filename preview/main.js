import {h1, tags} from "ziko"
// import { FileBasedRouting } from "ziko";
// // import {Collapsible} from "ziko-ui";
// // import {h1} from "ziko"

// FileBasedRouting(import.meta.glob("./src/pages/**/*.js"))

// // const pages = import.meta.glob("./src/pages/**/*.js")
// // console.log(Object.keys(pages))

import {TreeViewItem} from "zextra/ui/tree-view"

// globalThis.treeItem = TreeViewItem({label : "Label"})

globalThis.c = TreeViewItem({label : " Test .... "}),
tags.ul({},
    TreeViewItem({ label : "1. Zikojs Core"},
        TreeViewItem({ label : "1.1 Math"},
            TreeViewItem({ label : "1.1.1 Functions", href : "#"}),
            TreeViewItem({ label : "1.1.2 Complex"}),
            TreeViewItem({ label : "1.1.3 Matrix"}),
            TreeViewItem({ label : "1.1.4 Random"}),
        ),
        TreeViewItem({ label : "1.2 UI"},
            TreeViewItem({label : "1.2.1 Primitive Elements"}),
            TreeViewItem({label : "1.2.2 Flex"}),
            TreeViewItem({label : "1.2.3 Grid"}),
            TreeViewItem({label : "1.2.4 Suspense"}),
            TreeViewItem({label : "1.2.5 Wrappers"}),
        ),
        TreeViewItem({ label : "1.3 App"},
            TreeViewItem({label : "1.3.1 Client Side File Based Routing"})
        ),
        TreeViewItem({ label : "1.4 Time"}),
        TreeViewItem({ label : "1.5 Interactivity"},
            TreeViewItem({label : "1.5.1 Events"}),
            TreeViewItem({label : "1.5.1 Observers"}),
            TreeViewItem({label : "1.5.1 Event Emitter"}),
        )
    ),
    TreeViewItem({label : "2. Ziko-Server"},
        TreeViewItem({label : "2.1 File Based Routing"}),
        TreeViewItem({label : "2.2 Server Side Rendering"}),
        TreeViewItem({label : "2.3 Static Site Generation"}),
        TreeViewItem({label : "2.4 Client Side Hydration"}),
    ),
    TreeViewItem({label : "3. Mdzjs"}),
    TreeViewItem({label : "4. Ziko-Wrapper"},
        TreeViewItem({label : "4.1 Hyperscript-Based"},
            TreeViewItem({label : "4.1.1 Vanjs"}),
            c
        ),
        TreeViewItem({label : "4.2 JSX-Based"},
            TreeViewItem({label : "4.2.1 React"}),
            TreeViewItem({label : "4.2.2 Preact"}),
            TreeViewItem({label : "4.3.2 Solid"})
        ),
        TreeViewItem({label : "4.3 Template-Based"},
            TreeViewItem({label : "4.3.1 Vue"}),
            TreeViewItem({label : "4.3.2 Svelte"}),
        ),
        TreeViewItem({label : "4.4 Meta-Frameworks"},
            TreeViewItem({label : "4.4.1 Astro"}),
            TreeViewItem({label : "4.4.2 Next"}),
            TreeViewItem({label : "4.4.2 Svelte-Kit"}),
            TreeViewItem({label : "4.4.2 Solid-Start"}),
        )
    ),
    TreeViewItem({label : "5. Zextra"},
            TreeViewItem({label : "5.1 UI Components"}),
            TreeViewItem({label : "5.1 Math "}),
    ),
    TreeViewItem({label : "6. Addons"},
            TreeViewItem({label : "5.1 Ziko-gl"}),
            TreeViewItem({label : "5.2 Ziko-code "}),
            TreeViewItem({label : "5.2 Ziko-chart "}),
            TreeViewItem({label : "5.2 Ziko-icons "}),
            TreeViewItem({label : "5.2 P5.wrapper "}),
            TreeViewItem({label : "5.2 Ziko-lottie "}),
            TreeViewItem({label : "5.2 Ziko-keyframes "}),
    ),
    TreeViewItem({label : "7. Transformers"},
            TreeViewItem({label : "7.1 Xlsx-Transformer"}),
    ),
    TreeViewItem({label : "7. Adapters"},
            TreeViewItem({label : "7.1 Xlsx-Transformer"}),
    )
).style({
    listStyle: 'none',
    paddingLeft: '1.2em',
    margin: '0',
    overflow : 'auto',
    color : 'darkblue',
}).setAttr({
    tabindex : 0
})