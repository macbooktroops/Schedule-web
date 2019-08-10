import Vue, { VueConstructor } from "vue";
import $ from "jquery";
import { LoadComponents } from "@Components/loader";

export const LoadPage = (Page: VueConstructor<Vue>) => {
	let target = $("body>div");
	if (target.length !== 0) throw new Error("Cannot load page twice");
	target = $("<div/>").appendTo($("body"));

	LoadComponents(Vue);

	new Vue({
		render: (h) => h(
			"div",
			[
				h(Page)
			]
		)
	}).$mount(target.get(0));
};