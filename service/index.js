import http from "service/http";

/*
	Functions for doing API calls
*/

export const getTest = () => http.get("test");
