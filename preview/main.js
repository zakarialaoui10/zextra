import {h1, tags} from "ziko"
// import { FileBasedRouting } from "ziko";
// // import {Collapsible} from "ziko-ui";
// // import {h1} from "ziko"

// FileBasedRouting(import.meta.glob("./src/pages/**/*.js"))

// // const pages = import.meta.glob("./src/pages/**/*.js")
// // console.log(Object.keys(pages))

import {TreeItem, TreeView} from "zextra/ui/tree-view"

// globalThis.treeItem = TreeItem({label : "Label"})

globalThis.Test = TreeItem({label : " Test .... "}),
globalThis.tv = TreeView(
    TreeItem({ label : "1. Zikojs Core"},
        TreeItem({ label : "1.1 Math"},
            TreeItem({ label : "1.1.1 Functions", href : "#"}),
            TreeItem({ label : "1.1.2 Complex"}),
            TreeItem({ label : "1.1.3 Matrix"}),
            TreeItem({ label : "1.1.4 Random"}),
        ),
        TreeItem({ label : "1.2 UI"},
            TreeItem({label : "1.2.1 Primitive Elements"}),
            TreeItem({label : "1.2.2 Flex"}),
            TreeItem({label : "1.2.3 Grid"}),
            TreeItem({label : "1.2.4 Suspense"}),
            TreeItem({label : "1.2.5 Wrappers"}),
        ),
        TreeItem({ label : "1.3 App"},
            TreeItem({label : "1.3.1 Client Side File Based Routing"})
        ),
        TreeItem({ label : "1.4 Time"}),
        TreeItem({ label : "1.5 Interactivity"},
            TreeItem({label : "1.5.1 Events"}),
            TreeItem({label : "1.5.1 Observers"}),
            TreeItem({label : "1.5.1 Event Emitter"}),
        )
    ),
    TreeItem({label : "2. Ziko-Server"},
        TreeItem({label : "2.1 File Based Routing"}),
        TreeItem({label : "2.2 Server Side Rendering"}),
        TreeItem({label : "2.3 Static Site Generation"}),
        TreeItem({label : "2.4 Client Side Hydration"}),
    ),
    TreeItem({label : "3. Mdzjs"}),
    TreeItem({label : "4. Ziko-Wrapper"},
        TreeItem({label : "4.1 Hyperscript-Based"},
            TreeItem({label : "4.1.1 Vanjs"}),
        ),
        TreeItem({label : "4.2 JSX-Based"},
            TreeItem({label : "4.2.1 React"}),
            TreeItem({label : "4.2.2 Preact"}),
            Test,
            TreeItem({label : "4.3.2 Solid"})
        ),
        TreeItem({label : "4.3 Template-Based"},
            TreeItem({label : "4.3.1 Vue"}),
            TreeItem({label : "4.3.2 Svelte"}),
        ),
        TreeItem({label : "4.4 Meta-Frameworks"},
            TreeItem({label : "4.4.1 Astro"}),
            TreeItem({label : "4.4.2 Next"}),
            TreeItem({label : "4.4.2 Svelte-Kit"}),
            TreeItem({label : "4.4.2 Solid-Start"}),
        )
    ),
    TreeItem({label : "5. Zextra"},
            TreeItem({label : "5.1 UI Components"}),
            TreeItem({label : "5.1 Math "}),
    ),
    TreeItem({label : "6. Addons"},
            TreeItem({label : "5.1 Ziko-gl"}),
            TreeItem({label : "5.2 Ziko-code "}),
            TreeItem({label : "5.2 Ziko-chart "}),
            TreeItem({label : "5.2 Ziko-icons "}),
            TreeItem({label : "5.2 P5.wrapper "}),
            TreeItem({label : "5.2 Ziko-lottie "}),
            TreeItem({label : "5.2 Ziko-keyframes "}),
    ),
    TreeItem({label : "7. Transformers"},
            TreeItem({label : "7.1 Xlsx-Transformer"}),
    ),
    TreeItem({label : "8. Adapters"},
            TreeItem({label : "8.1 Deno"}),
            TreeItem({label : "8.2 Bun"}),
    ),
    TreeItem({label : "9. Kit"},
            // TreeItem({label : "9.1 Xlsx-Transformer"}),
    )
).style({
    color : 'darkblue',
    border : '2px darkblue solid',
    display : 'inline-block'
})

function getNumberingString(treeView, targetItem) {
    if (!treeView.isTreeView) return null;
    
    function findPath(items, target, currentPath = []) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (!item.isTreeItem) continue;
            
            const newPath = [...currentPath, i + 1];
            
            if (item === target) {
                return newPath.join('.');
            }
            
            if (item.items && item.items.length > 0) {
                const result = findPath(item.items, target, newPath);
                if (result) return result;
            }
        }
        return null;
    }
    
    return findPath(treeView.items, targetItem);
}

globalThis.getNumberingString = getNumberingString