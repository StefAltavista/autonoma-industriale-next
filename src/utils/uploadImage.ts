import axios from "./axios";

export default async function uploadImage(file) {
    console.log("upploadImage Func");
    if (!file) new Error("no file added");

    return new Promise((res, rej) => {
        let formData = new FormData();
        formData.append("file", file);

        axios
            .post("/api/uploadImage", formData)
            .then(({ data }) => {
                console.log("response from server:", data);
                res(data);
            })
            .catch((e) => rej(e));
    });
}
