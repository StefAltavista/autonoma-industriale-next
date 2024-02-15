import axios from "../utils/axios";
import { EventsDataType } from "@/globalContext/context";

export default async function UseFetchEvents() {
    const response = await axios.get("/api/events");

    if (response.status != 200) {
        console.log("AXIOS ERROR");
        return { error: "error fetching data", data: null };
    } else {
        const data: EventsDataType[] = response.data.reverse();

        return { error: null, data };
    }
}
