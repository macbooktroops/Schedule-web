import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import $ from "jquery";

import { BaseRouteInterface } from "@Libs/Interaces";
import { LoadComponents } from "@Components/loader";
import App from "@Libs/App.vue";

// 패이지 별 vue 객체 로드 구성
export const LoadPage = (routes: BaseRouteInterface[]): void => {
	let target = $("body>div");
	if (target.length !== 0) throw new Error("Cannot load page twice");
	target = $("<div/>").appendTo($("body"));

	Vue.use(VueRouter);
	Vue.use(Vuex);

	LoadComponents(Vue);

	// 라우터 설정
	const router = new VueRouter({
		routes
	});
	router.beforeEach((to, from, next) => {
		// to : 이동할 url
		// from : 현재 url
		// next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
		console.log("[DEBUG]Router BeforeEash to: ", to);
		console.log("[DEBUG]Router BeforeEash from: ", from);
		next();
	});

	// store 설정
	const store = new Vuex.Store({
		strict: true
	});

	new Vue({
		render: (h) => h(App),
		router,
		store
	}).$mount(target.get(0));
};