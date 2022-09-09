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
    plugins: [
      'react-native-reanimated/plugin',
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }],
    ]
  }
}
