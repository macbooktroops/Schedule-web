import config from "@/config.json";
import axios from "axios";

export const $ = {
	ajax: axios.create({
		baseURL: config.baseURL,
		method: "get",
		timeout: 3000,
		responseType: "json",
		headers: { "X-Requested-With": "XMLHttpRequest" },
		transformRequest: [
			function( data, headers ) {
				console.log("[DEBUG]transformRequest data:", data);
				console.log("[DEBUG]transformRequest headers:", headers);
				return data;
			}
		],
		transformResponse: [
			function( data ) {
				console.log("[DEBUG]transformResponse data:", data);
				return data;
			}
		],
	})
};