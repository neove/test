

module.exports={
    //入口文件，打包多个wenjian?
    entry: "./js/main.js",

    //出口文件：路径和文件名
    output:{
        path:"./build/",
        filename:"todolist.js"
    },
    //指定模块加载器
    module:{
       loaders:[
			{
				test:/.css$/,
				loaders:["style","css"],
				 exclude:"/node_modules/"
			},
			{
				test:/.jsx?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"todo")
			}
		]
    },
    //配置服务
    devServer:{
        hot:true,
        inline:true
    },
    //自动识别和补全后缀名
    resolve:{
        extensions:['','.css','.js','.jsx']
    }
    
}
