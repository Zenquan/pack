module.exports = function loader(filename, code) {
  if(/index/.test(filename)) {
    console.log('this is a loader')
  }

  return code
}