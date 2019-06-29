const path = require('path')
const parseDep = require('./parseDep')

module.exports = function generGraph(entry) {
  const entryDeps = parseDep(entry)
  const graph = [entryDeps]

  for(let asset of graph) {
    asset.mapping = {}
    const dirname = path.dirname(asset.filename)

    asset.deps.forEach(dep =>{
      const pathStr = path.join(dirname, dep);
      const pathArr = pathStr.split('.')
      const absolutePath = pathArr[pathArr.length-1] ==='js' ? pathStr : `${pathStr}.js` 
      
      const child = parseDep(absolutePath)
      asset.mapping[dep] = child.id
      graph.push(child)
    })
  }

  return graph
}