module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      ['@babel/preset-env', { modules: 'commonjs' }],
      '@babel/preset-react',
    ];
  
    const plugins = [];
  
    return {
      presets,
      plugins,
      sourceType: 'unambiguous',
      ignore: [/node_modules/],
      retainLines: true,
    };
  };