import Vue, { VueConstructor } from "vue";
import Vuex from "vuex";
import $ from "jquery";

import { LoadComponents } from "@Components/Loader";
import ScheduleModule from "@Store/ScheduleModule";

// 패이지 별 vue 객체 로드 구성
export const LoadPage = (Page: VueConstructor<Vue>): void => {
	let target = $("body>div");
	if (target.length !== 0) throw new Error("Cannot load page twice");
	target = $("<div/>").appendTo($("body"));

	Vue.use(Vuex);

	LoadComponents(Vue);
	// store 설정
	const store = new Vuex.Store({
		modules: [
			ScheduleModule
		],
		strict: true
	});

	new Vue({
		render: (h) => h("div", [ h(Page) ]),
		store
	}).$mount(target.get(0));
};