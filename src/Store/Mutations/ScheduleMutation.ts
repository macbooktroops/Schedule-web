import { ScheduleState } from "@Libs/Interaces";

export default class ScheduleMutation {
	public setId(state: ScheduleState, payload: any): void {
		state.id = payload.id;
	}
}