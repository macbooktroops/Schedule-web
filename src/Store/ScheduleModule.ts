import * as mutations from "@/Store/Mutations/ScheduleMutation";
import * as getters from "@Store/Getters/ScheduleGetter";
/** 스케줄러 액션 */
import * as actions from "@Store/Actions/ScheduleAction";
import { ScheduleState } from "@Libs/Interaces";
import { StoreOptions, ModuleTree } from 'vuex';

/** 스케줄러 상태정보 초기값 */
const state: ScheduleState = {
	id: 0,
	title: undefined,
	state: 0,
	start_time: undefined,
	latitude: 0.0,
	longitude: 0.0,
	content: undefined,
	registrant: 0,
	participants: [],
	arribal_member: []
};

const ScheduleModule: ModuleTree<unknown> = {
	state: {
		
	}
};

// ScheduleModule.ts
export default ScheduleModule;
 