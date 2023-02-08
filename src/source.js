async function startDevServer(webpackConfig) {
  const webpack = require('webpack')
  const WebpackDevServer = require('webpack-dev-server')
  const devServerConfig = Object.assign({}, webpackConfig.devServer)
  debugger
  alert('test')
  const compiler = webpack(webpackConfig)

  const devServer = new WebpackDevServer(devServerConfig, compiler)
  await devServer.start()
}