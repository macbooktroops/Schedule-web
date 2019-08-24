import * as mutations from "@/Store/Mutations/ScheduleMutation";
import * as getters from "@Store/Getters/ScheduleGetter";
/** 스케줄러 액션 */
import * as actions from "@Store/Actions/ScheduleAction";
import { ScheduleState } from "@Libs/Interaces";

/** 스케줄러 상태정보 초기값 */
const state: ScheduleState = {
	id: 0,
	title: null,
	state: 0,
	start_time: null,
	latitude: 0.0,
	longitude: 0.0,
	content: null,
	registrant: 0,
	participants: [],
	arribal_member: []
};