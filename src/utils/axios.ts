import axios from "axios";

var instance = axios.create({
    baseURL: "https://softwarenoise.com/",
    withCredentials: false,
    xsrfCookieName: "mytoken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
