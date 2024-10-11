import Subscribe from "@/components/Subscribe";
import Unsubscribe from "@/components/Unsubscribe";
import { redirect } from "next/navigation";
import "./mailinglist.css";

interface MailinglistProps {
    params: { action: string };
}

export default function Mailinglist({ params }: MailinglistProps) {
    const { action } = params;
    // console.log(action);
    if (action != "subscribe" && action != "unsubscribe") {
        redirect("/");
    }

    return (
        <div id="mailinglist">
            {action == "subscribe" && (
                <div className="mailinglistform">
                    <p>
                        Join our mailing list to recieve news about our
                        forthcoming events and releases:
                    </p>
                    <Subscribe />
                </div>
            )}
            {action == "unsubscribe" && (
                <div className="mailinglistform">
                    <p>
                        Enter your e-mail address to remove it from our database
                    </p>
                    <Unsubscribe />
                </div>
            )}
        </div>
    );
}
