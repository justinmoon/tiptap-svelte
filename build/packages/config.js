import path from "path";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import flow from "rollup-plugin-flow-no-whitespace";
import cjs from "rollup-plugin-commonjs";
import node from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import cssOnly from "rollup-plugin-css-only";

const resolve = _path => path.resolve(__dirname, "../../", _path);

function genConfig(opts) {
  const { version } = require(opts.package);
  const banner = `
    /*!
    * ${opts.name} v${version}
    * (c) ${new Date().getFullYear()} Scrumpy UG (limited liability)
    * @license MIT
    */
  `;
  const config = {
    input: {
      input: opts.input,
      plugins: [
        cssOnly({ output: false }),
        flow(),
        node(),
        cjs(),
        svelte({
          dev: true, // FIXME
          hydratable: true,
          emitCss: true
        }),
        replace({
          __VERSION__: version
        }),
        babel({
          exclude: "node_modules/**"
        })
      ],
      external(id) {
        return !/^[\.\/]/.test(id);
      }
    },
    output: {
      file: opts.file,
      format: opts.format,
      banner,
      name: opts.outputName
    }
  };

  if (opts.env) {
    config.input.plugins.unshift(
      replace({
        "process.env.NODE_ENV": JSON.stringify(opts.env)
      })
    );
  }

  return config;
}

export default [
  {
    package: "tiptap-svelte",
    outputName: "tiptap-svelte",
    outputFileName: "tiptap-svelte"
  },
  {
    package: "tiptap-svelte-extensions",
    outputName: "tiptapSvelteExtensions",
    outputFileName: "extensions"
  }
]
  .map(item => [
    {
      name: item.package,
      outputName: item.outputName,
      package: resolve(`packages/${item.package}/package.json`),
      input: resolve(`packages/${item.package}/src/index.js`),
      file: resolve(`packages/${item.package}/dist/${item.outputFileName}.js`),
      format: "umd",
      env: "development"
    },
    {
      name: item.package,
      outputName: item.outputName,
      package: resolve(`packages/${item.package}/package.json`),
      input: resolve(`packages/${item.package}/src/index.js`),
      file: resolve(
        `packages/${item.package}/dist/${item.outputFileName}.min.js`
      ),
      format: "umd",
      env: "production"
    },
    {
      name: item.package,
      outputName: item.outputName,
      package: resolve(`packages/${item.package}/package.json`),
      input: resolve(`packages/${item.package}/src/index.js`),
      file: resolve(
        `packages/${item.package}/dist/${item.outputFileName}.common.js`
      ),
      format: "cjs"
    },
    {
      name: item.package,
      outputName: item.outputName,
      package: resolve(`packages/${item.package}/package.json`),
      input: resolve(`packages/${item.package}/src/index.js`),
      file: resolve(
        `packages/${item.package}/dist/${item.outputFileName}.esm.js`
      ),
      format: "es"
    }
  ])
  .reduce((allConfigs, configs) => [...allConfigs, ...configs], [])
  .map(genConfig);
