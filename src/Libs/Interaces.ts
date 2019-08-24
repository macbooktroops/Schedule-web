/** 스케줄러 상태정보 인터페이스 */
export interface ScheduleState {
	id: number;
	title: string | null;
	state: number;
	start_time: string | null;
	latitude: number;
	longitude: number;
	content: string | null;
	registrant: number;
	participants: number[];
	arribal_member: number[];
}