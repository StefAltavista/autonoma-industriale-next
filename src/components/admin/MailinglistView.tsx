import { MailinglistResponseType } from "./Mailinglist";
export default function MailinglistView({
    mailinglist,
}: {
    mailinglist: MailinglistResponseType[];
}) {
    return (
        <div className="resultsContainer">
            <h3 className="mailingList">Mailing List</h3>
            <p className="total">[ Total: {mailinglist.length} ]</p>
            {mailinglist.map((email, idx) => {
                return (
                    <div key={idx} className="email">
                        <p className="email">
                            <strong>{email.email}</strong>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
