import babel from 'rollup-plugin-babel'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'ReactAdmonitions',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/styled.js',
    output: {
      file: 'dist/styled.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: ['styled-components']
  },
  {
    input: 'src/styled.js',
    output: {
      file: 'dist/styled.js',
      format: 'umd',
      name: 'ReactAdmonitions',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: ['styled-components']
  }
]
