import Vue, { VueConstructor } from "vue";

// 라우트 기본 인터페이스 컴포넌트 타입
type GlobalRouteComponentType = VueConstructor<Vue>;
// 라우트 기본 인터페이스 리다이렉션 타입
type GlobalRouteRedirectType = string;

// route 기본 인터페이스
export interface GlobalRouteInterface {
	path: string;	// 라우트 경로
	component?: GlobalRouteComponentType;	// 라우트 컴포넌트
	name?: string;
	redirect?: GlobalRouteRedirectType;
	alias?: string;
	children?: GlobalRouteInterface[];
	exact?: boolean;
}