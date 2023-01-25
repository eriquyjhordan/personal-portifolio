module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'svg-react-loader',
      },
    })

    return config
  },
}