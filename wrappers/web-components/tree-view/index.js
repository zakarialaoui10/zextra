import { define_wc } from "ziko";
import { TreeView, TreeItem } from "../../../src/ui/tree-view/index.js";
import { tags } from "ziko";

define_wc('zextra-tree-item',()=>TreeItem({label : tags.slot()}))
define_wc('zextra-tree-view',()=>{
    const T = TreeView()
    return T
})