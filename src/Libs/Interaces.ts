/** 스케줄러 상태정보 인터페이스 */
export interface ScheduleState {
	id?: number;
	title?: string;
	state?: number;
	start_time?: string;
	latitude?: number;
	longitude?: number;
	content?: string,
	registrant?: number;
	participants?: Array<number>;
	arribal_member?: Array<number>;
};
