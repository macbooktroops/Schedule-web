import Vue, { VueConstructor } from "vue";

import { LoadComponents } from "@Components/Loader";
import { LoadFunctions } from "@Libs/Functions";

// 패이지 별 vue 객체 로드 구성
export const LoadPage = (Page: VueConstructor<Vue>): void => {
	const target = document.getElementById("app") as Element;

	LoadFunctions();
	LoadComponents(Vue);

	Vue.config.devtools = true;
	Vue.config.errorHandler = (err, vm, info) => {
		console.log("[ERROR]", err);
		console.log("[ERROR]VM:", vm);
		console.log("[ERROR]INFO:", info);
	};

	new Vue({
		render: (h) => h("div", [ h(Page) ])
	}).$mount(target);
};