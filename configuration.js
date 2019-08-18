var path = require("path");
var fs = require("fs");

// 옵션 파싱
const options = {};
process.argv.map((argv, i) => {
	if ( /^(--)(.*)/.test(argv) ) options[argv.replace("--", "")] = process.argv[i + 1];
});

(async() => {
	const JSONConfig = {
		baseURL: (options.mode === "development") ? "" : ""
	};

	fs.writeFileSync(path.resolve(__dirname, "src/config.json"), JSON.stringify(JSONConfig));
})();