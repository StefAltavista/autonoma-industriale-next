import { MailinglistResponseType } from "../components/admin/Mailinglist";
import axios from "./axios";

type Part = string[];

interface List {
    [propName: string]: Part;
}

export default function MailinglistExportList(
    mailinglist: MailinglistResponseType[]
) {
    let list: List = {};
    let j: number = 0;

    let part = [];

    for (let i = 1; i <= mailinglist.length; i++) {
        part.push(mailinglist[i - 1].email);
        if (i % 10 == 0 || i == mailinglist.length) {
            list[`Part${j}`] = part;
            part = [];
            j++;
        }
    }

    console.log(list);
    axios.post("/api/mailinglist/exportlist", list).then((response) => {
        console.log("axios response: ", response);
    });
}
