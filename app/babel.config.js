module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    sourceMaps: true,
    plugins: [
      '@babel/transform-flow-strip-types',
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/transform-runtime'
    ],
    plugins: ['react-native-reanimated/plugin']
  }
}
