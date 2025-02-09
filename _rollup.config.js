// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from '@rollup/plugin-commonjs';
// import terser from "@rollup/plugin-terser";

// const Addon_name = "zextra";
// const NamedExport = "Zextra"
// const Author = "";

// const banner = `
// /*
//   Project: ${Addon_name}
//   Author: ${Author}
//   Date : ${new Date()}
// */
// `;
// const isProduction = process.env.NODE_ENV === "production";

// const output = [
//   {
//     file: `dist/${Addon_name}.mjs`,
//     format: "es",
//     banner,
//     exports: "named",
//   },
//   {
//     file: `dist/${Addon_name}.js`,
//     format: "umd",
//     name: NamedExport,
//     banner,
//     exports: "named",
//     globals: {
//       ziko: "Ziko",
//     },
//   },
// ];
// isProduction &&
//   output.push(
//     {
//       file: `dist/${Addon_name}.min.js`,
//       format: "umd",
//       name: NamedExport,
//       banner,
//       exports: "named",
//       plugins: [
//         terser({
//           output: {
//             comments: (node, { type, value }) =>
//               type === "comment2" && value.includes("Author"),
//           },
//         }),
//       ],
//     },
//   );

// export default {
//   input: "src/index.js",
//   output,
//   external: ["ziko"],
//   plugins: [
//     resolve(),
//     commonjs(),
//   ],
// };

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
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
const isMultiple = process.env.INPUT_MODE==="multiple";

const input = 
  isMultiple ? {
    ui: "src/ui/index.js",
    utils: "src/utils.js",
  } 
  : "src/index.js"

const baseOutput = isMultiple ? [
  {
    format: "es",
    dir: "dist",
    banner,
    exports: "named",
    entryFileNames: "[name].mjs",
  }, 
] : [
  {
        file: `dist/${Addon_name}.js`,
        format: "umd",
        name: NamedExport,
        banner,
        exports: "named",
        globals: {
          ziko: "Ziko",
        },
    },
]

// Add minified versions in production
if (isProduction) {
  baseOutput.push(
    // {
    //   format: "umd",
    //   dir: "dist/umd",
    //   entryFileNames: "[name].min.js",
    //   name: NamedExport,
    //   banner,
    //   exports: "named",
    //   plugins: [
    //     terser({
    //       output: {
    //         comments: (node, { type, value }) =>
    //           type === "comment2" && value.includes("Author"),
    //       },
    //     }),
    //   ],
    // }
  );
}
if(process.env.INPUT_MODE==="multiple")console.log("kkkks")
export default {
  input, 
  output: baseOutput,
  external: ["ziko"],
  plugins: [resolve(), commonjs()],
};
