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
    TreeItem({ label : "Zikojs Core"},
        TreeItem({ label : "Math"},
            TreeItem({ label : "Functions", href : "#"}),
            TreeItem({ label : "Complex"}),
            TreeItem({ label : "Matrix"}),
            TreeItem({ label : "Random"}),
        ),
        TreeItem({ label : "UI"},
            TreeItem({label : "Primitive Elements"}),
            TreeItem({label : "Flex"}),
            TreeItem({label : "Grid"}),
            TreeItem({label : "Suspense"}),
            TreeItem({label : "Wrappers"}),
        ),
        TreeItem({ label : "App"},
            TreeItem({label : "Client Side File Based Routing"})
        ),
        TreeItem({ label : "Time"}),
        TreeItem({ label : "Interactivity"},
            TreeItem({label : "Events"}),
            TreeItem({label : "Observers"}),
            TreeItem({label : "Event Emitter"}),
        )
    ),
    TreeItem({label : "Ziko-Server"},
        TreeItem({label : "File Based Routing"}),
        TreeItem({label : "Server Side Rendering"}),
        TreeItem({label : "Static Site Generation"}),
        TreeItem({label : "Client Side Hydration"}),
    ),
    TreeItem({label : "Mdzjs"}),
    TreeItem({label : "Ziko-Wrapper"},
        TreeItem({label : "Hyperscript-Based"},
            TreeItem({label : "Vanjs"}),
        ),
        TreeItem({label : "JSX-Based"},
            TreeItem({label : "React"}),
            TreeItem({label : "Preact"}),
            Test,
            TreeItem({label : "Solid"})
        ),
        TreeItem({label : "mplate-Based"},
            TreeItem({label : "Vue"}),
            TreeItem({label : "Svelte"}),
        ),
        TreeItem({label : "Meta-Frameworks"},
            TreeItem({label : "Astro"}),
            TreeItem({label : "Next"}),
            TreeItem({label : "Svelte-Kit"}),
            TreeItem({label : "Solid-Start"}),
        )
    ),
    TreeItem({label : "Zextra"},
            TreeItem({label : "UI Components"}),
            TreeItem({label : "Math "}),
    ),
    TreeItem({label : "Addons"},
            TreeItem({label : "Ziko-gl"}),
            TreeItem({label : "Ziko-code "}),
            TreeItem({label : "Ziko-chart "}),
            TreeItem({label : "Ziko-icons "}),
            TreeItem({label : "P5.wrapper "}),
            TreeItem({label : "Ziko-lottie "}),
            TreeItem({label : "Ziko-keyframes "}),
    ),
    TreeItem({label : "Transformers"},
            TreeItem({label : "Xlsx-Transformer"}),
    ),
    TreeItem({label : "Adapters"},
            TreeItem({label : "Deno"}),
            TreeItem({label : "Bun"}),
    ),
    TreeItem({label : "Kit"},
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