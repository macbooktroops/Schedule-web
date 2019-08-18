import config from "@/config.json";
import axios from "axios";

export const AjaxInstance = axios.create({
	baseURL: config.baseURL
});