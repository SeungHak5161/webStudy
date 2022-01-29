// import
const HtmlPlugin=require('html-webpack-plugin')
const CopyPlugin=require('copy-webpack-plugin')
// 절대경로 읽어옴
const path = require('path')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정 (parcel index.html)
  entry:'./js/main.js',
  // 결과물(번들)을 반환하는 설정
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'main.js',
    // 필요없는(최종 이전 버전 등) 부분 삭제과정 포함
    clean:true
  },

  module:{
    rules:[
      {
        test:/\.s?css$/,
        use:[
          // 4. html의 스타일 태그에 아래의 해석된 내용을 삽입하는 역할
          'style-loader',
          // 3. main.js에서 main.css를 import하지만 해석할 순 없음. 해석용
          'css-loader',
          // 2. 공급업체 접두사 삽입
          'postcss-loader',
          // 1. scss 파일 해석
          'sass-loader'
          // 아래부터 해석됨. 따라서 상기 순서 지켜야됨
        ]
      },
      {
        //babel을 통해 최신 ECMA script 브라우저 버전 상관없이 사용
        test:/\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 플러그인들을 설정
  plugins:[
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns:[
        {from:'static'}
      ]
    })
  ],
  devServer:{
    host:'localhost'
  }
}