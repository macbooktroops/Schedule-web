import Vue, { VueConstructor } from "vue";
import $ from "jquery";

import { LoadComponents } from "@Components/Loader";
import { LoadFunctions } from "@Libs/Functions";

// 패이지 별 vue 객체 로드 구성
export const LoadPage = (Page: VueConstructor<Vue>): void => {
	let target = $("body>div");
	if (target.length !== 0) throw new Error("Cannot load page twice");
	target = $("<div/>").appendTo($("body"));

	LoadFunctions();
	LoadComponents(Vue);

	new Vue({
		render: (h) => h("div", [ h(Page) ])
	}).$mount(target.get(0));
};