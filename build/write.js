let fs = require('fs');
let buf = new Buffer(1024000000);
let path = require('path');

// 批量传入项目，循环执行命令
let srcPath = path.join(__dirname, '../', 'src')

let pagesConfigFileName = 'pages.config.js'

fs.readdir(srcPath, function (err, files) {
  if (err) throw err;
  // 读取配置
  fs.open(srcPath + '/' + pagesConfigFileName, 'r+', function(err, fd) {
    if (err) {
      return console.warn(err)
    }
    fs.read(fd, buf, 0 ,buf.length, 0, function(err, bytes) {
      if (err) {
        console.warn('读取文件失败: ', err)
      }
      let configFileContent = buf.slice(0, bytes).toString() // 读取配置文件内容
      console.log('读取文件成功: ', configFileContent)
    })
  })

})
