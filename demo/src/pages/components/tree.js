import { TreeView, TreeItem } from "zextra/lists";
import 'zextra/style'
const App = () => {
  globalThis.Tree = TreeView(
    { displayNumbering: true },
    TreeItem(
      { label: "Zikojs Core" },
      TreeItem(
        { label: "Math" },
        TreeItem({ label: "Functions", href: "/components/splitter" }),
        TreeItem({ label: "Complex" }),
        TreeItem({ label: "Matrix" }),
        TreeItem({ label: "Random" }),
      ),
      TreeItem(
        { label: "UI" },
        TreeItem({ label: "Primitive Elements" }),
        TreeItem({ label: "Flex" }),
        TreeItem({ label: "Grid" }),
        TreeItem({ label: "Suspense" }),
        TreeItem({ label: "Wrappers" }),
      ),
      TreeItem(
        { label: "App" },
        TreeItem({ label: "Globals " }),
        TreeItem({ label: "Query Params" }),
        TreeItem({ label: "App" }),
        TreeItem({ label: "SPA" }),
        TreeItem({ label: "Client Side File Based Routing" }),
      ),
      TreeItem({ label: "Time" }),
      TreeItem(
        { label: "Interactivity" },
        TreeItem({ label: "Events" }),
        TreeItem({ label: "Observers" }),
        TreeItem({ label: "Event Emitter" }),
      ),
      TreeItem(
        { label: "Use" },
        TreeItem({ label: "useTitle" }),
        TreeItem({ label: "useFavicon" }),
        TreeItem({ label: "useLocaleStorage" }),
        TreeItem({ label: "useSessionStorage" }),
        TreeItem({ label: "useChannel" }),
        TreeItem({ label: "useEventEmimiter" }),
        TreeItem({ label: "useTitle" }),
        TreeItem({ label: "useThread" }),
      ),
    ),
    TreeItem(
      { label: "Ziko-Server" },
      TreeItem({ label: "File Based Routing" }),
      TreeItem({ label: "Server Side Rendering" }),
      TreeItem({ label: "Static Site Generation" }),
      TreeItem({ label: "Client Side Hydration" }),
    ),
    TreeItem({
      label: "Mdzjs",
      href: "https://github.com/zakarialaoui10/mdzjs",
    }),
    TreeItem(
      { label: "Ziko-Wrapper" },
      TreeItem({ label: "Hyperscript-Based" }, TreeItem({ label: "Vanjs" })),
      TreeItem(
        { label: "JSX-Based" },
        TreeItem({ label: "React" }),
        TreeItem({ label: "Preact" }),
        TreeItem({ label: "Solid" }),
      ),
      TreeItem(
        { label: "Template-Based" },
        TreeItem({ label: "Vue" }),
        TreeItem({ label: "Svelte" }),
      ),
      TreeItem(
        { label: "Meta-Frameworks" },
        TreeItem({ label: "Astro" }),
        TreeItem({ label: "Next" }),
        TreeItem({ label: "Svelte-Kit" }),
        TreeItem({ label: "Solid-Start" }),
        TreeItem({ label: "Nuxt" }),
        TreeItem({ label: "Remix" }),
      ),
    ),
    TreeItem(
      { label: "Zextra" },
      TreeItem({ label: "UI Components" }),
      TreeItem({ label: "Math " }),
    ),
    TreeItem(
      { label: "Addons" },
      TreeItem({ label: "Ziko-gl" }),
      TreeItem({ label: "Ziko-code " }),
      TreeItem({ label: "Ziko-chart " }),
      TreeItem({ label: "Ziko-icons " }),
      TreeItem({ label: "P5.wrapper " }),
      TreeItem({ label: "Ziko-lottie " }),
      TreeItem({ label: "Ziko-keyframes " }),
      TreeItem({ label: "Ziko-pdf " }),
      TreeItem({ label: "Ziko-tsl " }),
    ),
    TreeItem(
      { label: "Transformers" },
      TreeItem({ label: "Xlsx-Transformer" }),
      TreeItem({ label: "Word-Transformer" }),
    ),
    TreeItem(
      { label: "Adapters" },
      TreeItem({ label: "Deno" }),
      TreeItem({ label: "Bun" }),
    ),
    TreeItem(
      { label: "Kit" },
      // TreeItem({label : "9.1 Xlsx-Transformer"}),
    ).style({}),
  ).style({
    color: "darkblue",
    border: "2px darkblue solid",
    display: "inline-block",
    // background : 'var(--zextra-color-primary)',
    color: "var(--zextra-color-primary)",
    fontSize: "var(--zextra-large-font)",
  });
  return Tree
};

export default App;
