import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import svg from 'rollup-plugin-svg'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    postcss({
      extract: true,
    }),
    typescript(),
    resolve(),
    commonjs(),
    terser(),
    image(),
    svg(),
  ],
  external: ['react', 'react-dom'],
}
