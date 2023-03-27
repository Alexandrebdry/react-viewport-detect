import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import externals from "rollup-plugin-node-externals";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";

import pkg from "./package.json" ;

export default [
    {
        input: "./src/index.jsx",
        plugins: [
            del({ targets: "dist/*" }),
            externals({deps: true}),
            nodeResolve({
                extensions: [".js",".jsx",".ts",".tsx"]
            }),
            commonjs(),
            babel({
                babelHelpers: "runtime",
                exclude: "**/node_modules/**",
                extensions: [".js",".jsx",".ts",".tsx"]
            }),
            terser()
        ],
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" },
        ],
    }
];