import { RouteInterface } from "@Libs/Interaces";

import PageJoin from "@/Pages/login/join.vue";
import PageLogin from "@/Pages/login/login.vue";

// 라우트 리스트
export const Routes: RouteInterface[] = [
	{ name: "login", path: "", component: PageLogin },
	{ name: "join", path: "/join", component: PageJoin }
];

