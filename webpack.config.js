var webpack = require('webpack');
module.exports = {

  /*
   * 配置入口文件，入口文件可以以对象的形式配置，也可以以数组的形式配置,后缀名可以省略
   * */
  entry:{
    orchids:'./src/js/orchids'
  },
  //输出文件出口
  output: {
    /*
     输出路径，在这我们要手动创建一个文件夹，名字可以自己命名，
     输出的文件路径是相对于本文件的路径
     * */
    path: './dist',  //输出路径
    filename: '[name].js'     //输出文件名，文件可以自己定义，[name]的意思是与入口文件的文件对应，可以不用[name]，
  },
  /*
   * 标题：加载器（loaders）
   * 作用：需要下载不同别的加载器，如css，js，png等等
   * */
  loaders: [
    //babel加载器可以把jsx的语法转换为js的语法，也可以把es6的语法标准转换es5的语法标准
    {
      test: /\.js?$/,
      loaders: ['babel-loader']
    },
    {
      test: /\.css$/,
      loader:  'style-loader!css-loader'
    }
  ]
  /**
   * 压缩
   */
  //plugins: [
  //  new webpack.optimize.UglifyJsPlugin({
  //    compress: {
  //      warnings: false
  //    }
  //  })
  //]
};