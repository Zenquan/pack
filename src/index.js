const {writeFileSync} = require('fs')
const generGraph = require('./generGraph')
const bulider = require('./bulider')

let graph = generGraph('./example/entry.js')
let res = bulider(graph)

writeFileSync('./bundle.js', res)
