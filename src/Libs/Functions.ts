import config from "@/config.json";
import axios from "axios";
import "@Libs/Date";

export const $ = {
	ajax: axios.create({
		baseURL: config.baseURL,
		method: "get",
		timeout: 3000,
		responseType: "json",
		headers: { "X-Requested-With": "XMLHttpRequest" },
		transformRequest: [
			function( data, headers ) {
				return data;
			}
		],
		transformResponse: [
			function( data ) {
				return data;
			}
		],
	})
};

/** 함수 재정의 */
export const LoadFunctions = () => {
	/** 날짜 포맷팅 처리 */
	Date.prototype.FormatString = function(Format: string) {
		let Result = Format.toUpperCase();

		const WeekSet = ["일", "월", "화", "수", "목", "금", "토"];

		const FullYear = this.getFullYear().toString();
		const Year = FullYear.substring(2);
		const Month = this.getMonth() + 1;
		const Day = this.getDate();
		const Week = WeekSet[this.getDay()];
		const Hour = this.getHours();
		const Minutes = this.getMinutes();
		const Seconds = this.getSeconds();

		/** 년 */
		Result = Result.indexOf("YYYY") !== -1 ?
			Result.replace("YYYY", FullYear)
			: Result.indexOf("YY") !== -1 ?
			Result.replace("YY", Year)
			: Result;

		/** 월 */
		Result = Result.indexOf("MM") !== -1 ?
			Result.replace("MM", `${Month < 10 ? `0${Month}` : Month}`)
			: Result;

		/** 일 */
		Result = Result.indexOf("DD") !== -1 ?
			Result.replace("DD", `${Day < 10 ? `0${Day}` : Day}`)
			: Result;

		/** 요일 */
		Result = Result.indexOf("E") !== -1 ?
			Result.replace("E", Week)
			: Result;

		/** 오전/오후 */
		Result = Result.indexOf("A") !== -1 ?
			Hour < 12 ?
			Result.replace("A", "오전")
			: Result.replace("A", "오후")
			: Result;

		/** 시 */
		if (Result.indexOf("HH") !== -1) {
			const position = Result.indexOf("HH") + 2;
			const standard = parseInt(Result.substring(position, position + 2), NaN);
			if (!isNaN(standard)) {
				Result = standard === 12 ?
					Result.replace("HH12", `${Hour < 10 ? `0${Hour}` : Hour % 12 === 0 ? 12 : Hour % 12}`)
					: Result.replace("HH24", `${Hour < 10 ? `0${Hour}` : Hour}`);
			} else Result = Result.replace("HH", `${Hour < 10 ? `0${Hour}` : Hour}`);
		}

		/** 분 */
		Result = Result.indexOf("MI") !== -1 ?
			Result.replace("MI", `${Minutes < 10 ? `0${Minutes}` : Minutes}`)
			: Result;

		/** 초 */
		Result = Result.indexOf("SS") !== -1 ?
			Result.replace("SS", `${Seconds < 10 ? `0${Seconds}` : Seconds}`)
			: Result;

		return Result;
	};
};