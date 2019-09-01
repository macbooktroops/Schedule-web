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
		let Result = Format;

		/** 년 */
		if (Format.indexOf("YYYY") >= 0 || Format.indexOf("yyyy") >= 0)
			Result = Result.replace(/(YYYY|yyyy)/g, `${this.getFullYear()}`);
		else if (Format.indexOf("YY") >= 0 || Format.indexOf("yy") >= 0)
			Result = Result.replace(/(YY|yy)/g, `${this.getFullYear()}`.substring(2));
		/** 월 */
		if (Format.indexOf("MM") >= 0 || Format.indexOf("mm") >= 0)
			Result = Result.replace(/(MM|mm)/g, `${this.getMonth() + 1 < 10 ? "0" + (this.getMonth() + 1) : this.getMonth() + 1}`);

		/** 일 */
		if (Format.indexOf("DD") >= 0 || Format.indexOf("dd") >= 0)
			Result = Result.replace(/(DD|dd)/g, `${this.getDate() < 10 ? "0" + this.getDate() : this.getDate()}`);

		/** 시 */
		if (Format.indexOf("HH") >= 0 || Format.indexOf("hh") >= 0)
			Result = Result.replace(/(HH|hh)/g, `${this.getHours() < 10 ? "0" + this.getHours() : this.getHours()}`);

		/** 분 */
		if (Format.indexOf("MI") >= 0 || Format.indexOf("mi") >= 0)
			Result = Result.replace(/(MI|mi)/g, `${this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes()}`);

		/** 초 */
		if (Format.indexOf("SS") >= 0 || Format.indexOf("ss") >= 0)
			Result = Result.replace(/(SS|ss)/g, `${this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds()}`);

		return Result;
	};
};