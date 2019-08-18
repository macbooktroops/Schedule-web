import { $ } from "@Libs/Functions";
// 로그인 액션

/**
 * 일정상세정보를 가져옵니다.
 * @param schedule_id
 */
export const getSchedulerDetail = (schedule_id: string): void => {
	$.ajax.get(`/v1/schedule/schedule/${schedule_id}/`)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
};