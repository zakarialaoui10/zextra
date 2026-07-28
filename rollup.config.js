import { globSync } from "glob";
import path from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const inputs = Object.fromEntries(
  globSync("src/components/*/index.js").map(file => [
    path.relative("src", file).replace(/\.js$/, ""),
    file,
  ])
);

export default {
  input: inputs,
  output: {
    dir: "dist",
    format: "es",
    preserveModules: true,
    preserveModulesRoot: "src",
    entryFileNames: "[name].js",
  },
  plugins: [resolve(), commonjs()],
  external: ["ziko"],
};