// 이거 뭔지 나중에 설명해준다고 했음
async function test(){
  const promise=Promise.resolve(123)
  console.log(await promise)
}
test()
// const path = require('path')
// console.log(path)
// console.log(__dirname)
// console.log(path.resolve(__dirname, 'dist'),)