import config from "@/config.json";
import axios from "axios";

export const $ = {
	ajax: axios.create({
		baseURL: config.baseURL
	})
};