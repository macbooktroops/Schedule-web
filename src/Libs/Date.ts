export {};

/** 전역 선언 처리 */
declare global {
	/** date 인터페이스 추가 */
	interface Date {
		FormatString(date: string | Date): string;
	}
}