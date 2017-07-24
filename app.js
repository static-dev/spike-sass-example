const htmlStandards = require('reshape-standard')
const autoprefixer = require('autoprefixer')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.NODE_ENV

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.scss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  module: {
    rules: [{ test: /\.scss/, use: [{ loader: 'sass-loader' }] }]
  },
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  postcss: { plugins: [autoprefixer()] },
  babel: jsStandards()
}
