import axios from "../../utils/axios";
import { MailinglistResponseType } from "./Mailinglist";

export default function MailinglistExport(
    mailinglist: MailinglistResponseType[]
): Promise<string | undefined> {
    return axios
        .post("/api/mailinglist/exportlist", { mailinglist })
        .then(({ data }) => {
            console.log(data);
            if (data.success) {
                const newFile = new Blob([data.list], { type: "text/plain" });
                return URL.createObjectURL(newFile);
            }
        });
}
