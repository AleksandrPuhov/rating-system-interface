import axios from "axios";

const instance = axios.create({
	baseURL: "https://random-data-api.com/api/",
});

export default instance;
