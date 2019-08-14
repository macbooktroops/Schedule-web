import Vue, { VueConstructor } from "vue";

// 라우트 기본 인터페이스 컴포넌트 타입
type BaseRouteComponentType = VueConstructor<Vue>;
// 라우트 기본 인터페이스 리다이렉션 타입
type BaseRouteRedirectType = string;

// route 기본 인터페이스
export interface BaseRouteInterface {
	path: string;	// 라우트 경로
	component?: BaseRouteComponentType;	// 라우트 컴포넌트
	name?: string;
	redirect?: BaseRouteRedirectType;
	alias?: string;
	children?: BaseRouteInterface[];
	exact?: boolean;
}

//	api 함수 타입
export type BaseAPIType = (url: string, ...args: any[]) => void;