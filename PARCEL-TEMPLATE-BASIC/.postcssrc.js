// ESM(ecma script module) 예시
// CommonJS(node.js는 얘를 지원)

// export {
//   plugins:[
//     import autoprefixer from 'autoprefixer'
//   ]
// }
module.exports={
  plugins:[
    require('autoprefixer')
  ]
}