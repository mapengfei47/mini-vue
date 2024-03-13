import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
export default {
  // 入口文件
  input: 'packages/vue/src/index.ts',
  // 打包出口
  output: {
    sourcemap: true,
    file: './packages/vue/dist/vue.js',
    format: 'iife',
    name: 'Vue'
  },

  // 插件
  plugins: [
    // ts
    typescript({
      sourceMap: true
    }),
    // 模块路径补全
    resolve(),
    // 转 commonjs 为 ESM
    commonjs()
  ]
}
