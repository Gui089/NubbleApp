module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    ['module-resolver',{
      root:'.',
      alias:{
        '@Components': './src/Components',
        '@hooks': './src/hooks',
        '@routes': './src/routes',
        '@screens': './src/screens',
        '@theme':'./src/theme',
        '@domain':'./src/domain'
      }
    }]
  ]
};
