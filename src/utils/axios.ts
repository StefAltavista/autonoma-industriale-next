import axios from "axios";

var instance = axios.create({
    baseURL: "https://autonomaindustriale.com/",
    withCredentials: false,
    xsrfCookieName: "mytoken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
