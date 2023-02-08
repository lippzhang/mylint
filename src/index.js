const fs = require('fs');
const path = require('path');
const { readFileSync } = fs;

// 读取源文件
const sourceFile = readFileSync(path.resolve(__dirname,'./source.js'), 'utf-8');

// 输出结果
const report = msg => {
  console.error(msg)
}

// 处理文件
const rule1 = 'debugger'
const rule2 = /alert\(\'.*\'\)/

if(sourceFile.match(rule1)) { 
  report('存在debugger')
}
if(sourceFile.match(rule2)) {
  report('存在alert')
}
