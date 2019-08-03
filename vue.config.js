'use strict'
const path = require('path');

/*
 *  다중 페이지 처리
 */
const pages = (() => {

})();

module.exports = () => {
  // 개발모드에 따른 설정분기처리
  const publicPath = (process.env.NODE_ENV === 'production') ? '/schedule-web' : '';
  const config = {
    publicPath, // base url 설정
    filenameHashing: false, // 컴파일된 파일명에 해쉬 추가 여부
    // pages,  // 다중페이지 지원 설정
    chainWebpack: config => {
    },
    /*
     * contentBase {string} dev서버 컨테이너 위치
     * compress {boolean} 로딩파일 압축 여부
     * host {string} 호스팅 주소
     * port {number} dev서버 포트
     * historyApiFallback {boolean} 설정해놓은 url 이외의 url 경로로 접근 시 index.html 서핑여부 체크
     */
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      clientLogLevel: 'debug',
      compress: true,
      host: '0.0.0.0',
      port: 9000,
      historyApiFallback: true
    },

    /*
     * css 설정
     */
    css: {
      module: true,
      loaderOptions: {
        sass: { // 전역 scss 파일 지정
          data:
            `@import '@/styles/_variables.scss';`
            `@import '@/styles/_mixins.scss';`
        }
      }
    }
  };

  return config;
};