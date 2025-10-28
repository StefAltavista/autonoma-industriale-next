//client-side-rendering
import MixSeriesData from "@/lib/mixSeriesData";
import "./page.css";

type eventPageParams = {
    params: { id: string; };
};

export default function Mix({ params }: eventPageParams) {
    const mix = MixSeriesData.find((mix) => mix.id === Number(params.id));

    if (mix) {
        const scSrc = mix.soundcloudLink
            ? `https://w.soundcloud.com/player/?url=${encodeURIComponent(
                mix.soundcloudLink
            )}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`
            : null;

        return (
            <div
                id="mixPage"
                style={{ backgroundImage: `url(${mix.coverImage})` }}
            >
                <div className="rowContainer">
                    <div className="leftColumn">
                        <img
                            src={mix.coverImage}
                            alt={`${mix.name} cover image`}
                            className="mixCoverImage mixCoverImage-desktop"
                        />
                        <a href="/mix-series" className="backToMixesBtn backToMixesBtn-desktop">⟵ Back to Mixes</a>
                    </div>
                    <div className="mixTextContent">
                        <h2 style={!!mix.note ? { marginBottom: 0 } : {}}>{mix.name}</h2>
                        {!!mix.note && <p style={{ marginTop: 0 }}>{mix.note}</p>}
                        {mix.soundcloudLink && scSrc && (
                            <div className="soundcloudPlayer" style={{ margin: '0 0 1.5rem 0' }}>
                                <iframe
                                    title={`${mix.name} — SoundCloud player`}
                                    allow="autoplay"
                                    src={scSrc}
                                />
                            </div>
                        )}
                        <p>{mix.description}</p>
                        {mix.dialog && (
                            <div id="dialogSection">
                                <h3>Dialog</h3>
                                {mix.dialog.map((entry, index) => (
                                    <div key={index} className="dialogEntry">
                                        <strong>{entry.talker}:</strong> {entry.message}
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Mobile image at end of text */}
                        <img
                            src={mix.coverImage}
                            alt={`${mix.name} cover image`}
                            className="mixCoverImage mixCoverImage-mobile noDesktop"
                        />
                        {/* Mobile back button at end of text */}
                        <a href="/mix-series" className="backToMixesBtn backToMixesBtn-mobile">⟵ Back to Mixes</a>
                    </div>
                </div>

            </div>
        );
    }
    return <div>Mix not found.</div>;
}