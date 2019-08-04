'use strict'
const path = require('path');
const fs = require('fs');
const glob = require('glob');

/*
 *  다중 페이지 처리
 */
const pages = (() => {
  const pages = glob.sync(path.resolve(__dirname, 'src/pages/**/*.vue'));
  const tsTemplate = fs.readFileSync(path.resolve(__dirname, 'src/templates/loader.ts'), "utf8");
  
  if(!fs.existsSync(path.resolve(__dirname, 'temp'))) {
    fs.mkdirSync(path.resolve(__dirname, 'temp'));
  }
  
  const endpages = {};
  pages.map(page => {
    const dir = path.dirname(page);
    const basename = path.basename(dir)
    const filename = path.basename(page);
    const tsFilename = filename.replace('vue', 'ts');

    const _ts = tsTemplate.replace('#PagePath', `@/pages/${basename}/${filename}`);
    fs.writeFileSync(path.resolve(__dirname, 'temp', tsFilename), _ts);

    Object.assign(endpages, {
      [basename]: {
        entry: path.resolve(__dirname, 'temp', tsFilename), // 메인으로 볼거
        template: path.resolve(__dirname, 'src/templates/index.html'),  // 탬플릿 html 파일
        filename: `${basename}.html`, // 컴파일 파일명
        title: basename, // 타이틀
        chunks: ['chunk-vendors', 'chunk-common', basename]
      }
    });
  });

  return endpages;
})();

module.exports = () => {
  // 개발모드에 따른 설정분기처리
  const publicPath = (process.env.NODE_ENV === 'production') ? '/schedule-web' : '';
  const config = {
    publicPath, // base url 설정
    filenameHashing: false, // 컴파일된 파일명에 해쉬 추가 여부
    pages,  // 다중페이지 지원 설정
    chainWebpack: config => {
      config.resolve.alias.set('@', path.resolve(__dirname, 'src'));  // 메인
      config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components')); // 컴포넌트
      config.resolve.alias.set('@styles', path.resolve(__dirname, 'src/styles')); // 스타일파일
      config.resolve.alias.set('@assets', path.resolve(__dirname, 'src/assets')); // 리소스파일
      // config.resolve.extensions.push('', '.vue', '.ts');
      // 공통으로 사용하는 라이브러리를 외부 파일로 분리
      config.optimization.splitChunks({
        cacheGroups: {
          default: false,
          vendors: {
            name: "chunk-vendors",
            priority: -11,
            chunks: "all",
            test: /[\\/]node_modules[\\/]/,
            enforce: true
          },
          common: {
            name: "chunk-common",
            priority: -20,
            chunks: "all",
            minChunks: 2,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      });
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
      index: 'login.html',
      historyApiFallback: true
    },

    /*
     * css 설정
     */
    css: {
      // module: true,
      loaderOptions: {
        sass: { // 전역 scss 파일 지정
          data: `
            @import '@/styles/_variables.scss';
            @import '@/styles/_mixins.scss';
            `
        }
      }
    }
  };

  return config;
};