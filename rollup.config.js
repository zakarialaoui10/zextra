import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";

const Addon_name = "zextra";
const NamedExport = "Zextra";
const Author = "";

const banner = `
/*
  Project: ${Addon_name}
  Author: ${Author}
  Date : ${new Date()}
*/
`;

const isProduction = process.env.NODE_ENV === "production";
const Target = process.env.TARGET;

const inputs = {
    ui : "src/ui/index.js",
    canvas : "src/canvas/index.js"
}

const output = [
  {
    file: `dist/${Addon_name}-${Target}.mjs`,
    format: "es",
    banner,
    exports: "named",
  },
  {
    file: `dist/${Addon_name}-${Target}.js`,
    format: "umd",
    name: NamedExport,
    banner,
    exports: "named",
    globals: {
      ziko: "Ziko",
    },
  },
];

export default {
  input : inputs[Target], 
  output,
  external: ["ziko"],
  plugins: [resolve(), commonjs()],
};