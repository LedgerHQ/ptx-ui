import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import filesize from "rollup-plugin-filesize";

import packageJson from "./package.json" with { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        interop: "compat",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        interop: "compat",
      },
    ],
    plugins: [
      commonjs(),
      filesize(),
      peerDepsExternal(),
      resolve(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.{ts,tsx}", "**/*.stories.{ts,tsx}"],
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
