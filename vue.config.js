module.exports = {
　　　　devServer: {
　　　　　　host: 'localhost', //这里好像不能加HTTP
　　　　　　port: 8084, //vue 端口
// 　　　　　　proxy: {  //配置跨域
// 　　　　　　　　'/api': {
// 　　　　　　　　　　target: 'http://localhost:8080',  //这里后台的地址模拟的;应该填写你们真实的后台接口
// 　　　　　　　　　　changOrigin: true,  //允许跨域
// 　　　　　　}
// 　　　　}
　　}
}