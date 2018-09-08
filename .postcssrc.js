module.exports = {
  plugins: [
    require('autoprefixer')(
      {
        browsers: [
          'last 20 Chrome versions',
          'IOS >= 5',
          'Android >= 4.3'
        ]
      }
    ),
    require('postcss-adaptive')({
      remUnit: 75,
      autoRem: true
    })
  ]
}