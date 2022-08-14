//ESM -> 자바스크립트에서 사용하는 모듈
//CommonJS -> 노드js에서 지원하는 모듈

//import autoprefixer from 'autoprefixer'
//export {
//   plugins:[
//     autoprefixer
//   ]
// }

module.exports = {
  plugins:[
    require('autoprefixer')
  ]
}