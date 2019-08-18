"use strict"
const path = require("path");
const fs = require("fs");
const glob = require("glob");
const os=require('os');

/*
 *	다중 페이지 처리
 */
// const pages = (() => {
// 	const endpages = {};
// 	const dirs = glob.sync(path.resolve(__dirname, "src/Pages/*"));
// 	const tsTemplate = fs.readFileSync(path.resolve(__dirname, "src/Templates/loader.ts"), "utf8");
	
// 	if(!fs.existsSync(path.resolve(__dirname, "temp"))) {
// 		fs.mkdirSync(path.resolve(__dirname, "temp"));
// 	}

// 	dirs.map(dir => {
// 		const basename = path.basename(dir);
// 		const tsFilename = `${basename}.ts`;
// 		const _ts = tsTemplate.replace("#RoutesPath", `@/Pages/${basename}/${basename}.route.ts`);
// 		fs.writeFileSync(path.resolve(__dirname, "temp", tsFilename), _ts);

// 		Object.assign(endpages, {
// 			[basename]: {
// 				entry: path.resolve(__dirname, "temp", tsFilename), // 메인으로 볼거
// 				template: path.resolve(__dirname, "src/Templates/index.html"),	// 탬플릿 html 파일
// 				filename: `${basename}.html`, // 컴파일 파일명
// 				title: basename, // 타이틀
// 				chunks: ["chunk-vendors", "chunk-common", basename]
// 			}
// 		});
// 	});

// 	return endpages;
// })();


const pages = (() => {
  const pages = glob.sync(path.resolve(__dirname, 'src/Pages/**/*.vue'));
  const tsTemplate = fs.readFileSync(path.resolve(__dirname, 'src/Templates/loader.ts'), "utf8");
  
  if(!fs.existsSync(path.resolve(__dirname, 'temp'))) {
    fs.mkdirSync(path.resolve(__dirname, 'temp'));
  }
  
  const endpages = {};
  pages.map(page => {
    const dir = path.dirname(page);
    const basename = path.basename(dir)
    const filename = path.basename(page);
    const tsFilename = filename.replace('vue', 'ts');

    const _ts = tsTemplate.replace('#PagePath', `@/Pages/${basename}/${filename}`);
    fs.writeFileSync(path.resolve(__dirname, 'temp', tsFilename), _ts);

    Object.assign(endpages, {
      [basename]: {
        entry: path.resolve(__dirname, 'temp', tsFilename), // 메인으로 볼거
        template: path.resolve(__dirname, 'src/Templates/index.html'),  // 탬플릿 html 파일
        filename: filename.replace('vue', 'html'), // 컴파일 파일명
        title: "[일정을 공유하다] 일공" // 타이틀 
      }
    });
  });

  return endpages;
})();


module.exports = () => {
	// 개발모드에 따른 설정분기처리
	const publicPath = (process.env.NODE_ENV === "production") ? "/schedule-web" : "";
	const config = {
		publicPath, // base url 설정
		filenameHashing: false, // 컴파일된 파일명에 해쉬 추가 여부
		pages,	// 다중페이지 지원 설정
		chainWebpack: config => {
			config.resolve.alias.set("@", path.resolve(__dirname, "src"));
			config.resolve.alias.set("@Components", path.resolve(__dirname, "src/Components"));
			config.resolve.alias.set("@Defines", path.resolve(__dirname, "src/Defines"));
			config.resolve.alias.set("@Store", path.resolve(__dirname, "src/Store"));
			config.resolve.alias.set("@Libs", path.resolve(__dirname, "src/Libs"));
			config.resolve.alias.set("@Resources", path.resolve(__dirname, "src/Resources"));
			config.resolve.alias.set("@Styles", path.resolve(__dirname, "src/Styles"));
			
			// config.resolve.extensions.push("", ".vue", ".ts");
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

			// ts work memory setting
			config.plugin('fork-ts-checker')
				.tap(args => {
					args[0].workers = 1;
					args[0].memoryLimit = 2048;
					return args
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
			contentBase: path.join(__dirname, "dist"),
			clientLogLevel: "debug",
			compress: true,
			host: "0.0.0.0",
			port: 9000,
			index: "calendar-detail.html",
			historyApiFallback: true,
			proxy: {
				'v1': {
					target: 'http://localhost:8080',
					changeOrigin: true
				}
			}
		},

		/*
		 * css 설정
		 */
		css: {
			// module: true,
			loaderOptions: {
				sass: { // 전역 scss 파일 지정
					data: `
						@import "@/Themes/_loader.scss";
						@import "@/Styles/main.scss";
						`
				}
			}
		}
	};
	
	return config;
};