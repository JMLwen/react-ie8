要特别留意react、react-dom、react-router、history的版本。

入口文件需要加载:

require("es-shim");

require("es-shim/es5-sham");

require("console-polyfill");

require("babel-polyfill");


要使用ES6还需更改webpack.config.js的loaders


loaders:[{

  test:/\.js[x]?$/,
  exclude:'./node_module/',
  loaders:['es3ify-loader','babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0,']
}]
