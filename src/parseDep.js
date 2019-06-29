const babel = require('@babel/core')
const babylon = require('@babel/parser')
const traverse = require('@babel/traverse').default
const {readFileSync} = require('fs')

const loader = require('./loader') 

let ID = 0
module.exports = function parseDep(filename) {
// 读、解析、遍历、推入、转成es5、返回
  const rawCode = readFileSync(filename, 'utf-8')
  const ast = babylon.parse(rawCode, {
    sourceType: 'module'
  })
  let deps = []
  traverse(ast, {
    ImportDeclaration({node}) {
      deps.push(node.source.value)
    }
  })
  
  const id = ID++

  const {code} = loader(filename, babel.transformFromAstSync(ast, null, {
    presets: ['@babel/preset-env']
  }))

  return {
    id,
    filename,
    deps,
    code
  }
}