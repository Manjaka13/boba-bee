import axios from "axios";
import ws from "service/ws";
import { BASE_URL } from "helpers/const";

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

// Gets
const get = (endpoint) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${BASE_URL}/${ws[endpoint]}`, {
				headers,
			})
			.then(({ data }) => resolve(typeof data === "string" ? JSON.parse(data) : data))
			.catch((e) => reject(e));
	});
}

// The http service for API calls
const http = {
	get,
};

export default http;
