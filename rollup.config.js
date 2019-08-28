import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'umd',
        name: 'ReactAdmonitions',
        sourcemap: true
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve()
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'src/styled.js',
    output: [
      {
        file: 'dist/styled.js',
        format: 'umd',
        name: 'ReactAdmonitions',
        sourcemap: true,
        globals: {
          'styled-components': 'styled'
        }
      },
      {
        file: 'dist/styled.esm.js',
        format: 'esm',
        sourcemap: true,
        globals: {
          'styled-components': 'styled'
        }
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve()
    ],
    external: ['react', 'react-dom', 'styled-components']
  }
]
