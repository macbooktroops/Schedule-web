import Vue, { VueConstructor } from "vue";

// route 기본 인터페이스
export interface RouteInterface {
	path: string;	// 라우트 경로
	component?: VueConstructor<Vue>;	// 라우트 컴포넌트
	name?: string;
	redirect?: string;
	alias?: string;
	children?: RouteInterface[];
	exact?: boolean;
}