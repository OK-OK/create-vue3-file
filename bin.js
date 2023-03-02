#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const args = process.argv.slice(2); 
const getTemplate = require('./template')

const fileName = args[1]

if (!args[0]) {
  console.error('🚗请指定文件路径！');
  return;
}
if (!fileName) {
  console.error('📃请指定文件名！');
  return;
}

const filePath = path.join(process.cwd(), `${args[0]}/${fileName}.vue`)

fs.ensureFile(filePath, err => {
  !err && fs.writeFile(filePath, getTemplate(fileName))
})
