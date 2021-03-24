// @ts-check
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import { version } from "./package.json";
import sizeCheck from "rollup-plugin-filesize-check";

console.log("📦  - running rollup..\n");
const banner = "/* kindle clipping " + version + " MTI 2.0 */";

/**
 * @type { import('rollup').RollupOptions }
 */
export default [
  {
    input: "src/main.ts",
    output: [
      { banner: banner, file: "builds/kindleClipping.mjs", format: "esm" },
    ],
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      json(),
      typescript({
        target: "es2019",
        include: ["src/**/*.ts"],
        esModuleInterop: true,
      }),
      commonjs(),
      sizeCheck({ expect: 92, warn: 10 }),
    ],
  },
  {
    input: "src/main.ts",
    output: [
      { banner: banner, file: "builds/kindleClipping.cjs", format: "cjs" },
    ],
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      json(),
      typescript({
        target: "es2019",
        include: ["src/**/*.ts"],
        esModuleInterop: true,
      }),
      commonjs(),
      sizeCheck({ expect: 92, warn: 10 }),
    ],
  },
  {
    input: "src/main.ts",
    output: [
      { banner: banner, file: "builds/kindleClipping.min.js", format: "umd", name: "kindleClipping" },
    ],
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      json(),
      typescript({
        target: "es2019",
        include: ["src/**/*.ts"],
        esModuleInterop: true,
      }),
      commonjs(),
      sizeCheck({ expect: 92, warn: 10 }),
      terser(),
    ],
  },
];
