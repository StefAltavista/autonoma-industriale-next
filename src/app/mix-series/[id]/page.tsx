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
                        {!!mix.dialog &&
                            <>
                                <div className="introBox">
                                    <p style={{ marginBottom: "5px", fontStyle: "italic" }}>
                                        Our Mix Series returns in a new form, a convergence of sounds, stories and original graphics for a special edition of five episodes, one every month till the end of the year.
                                    </p>
                                    <p style={{ fontStyle: "italic" }}>
                                        Each episode focusing on an emerging artist whose work, both solo and within their collective, is contributing to redefine the cultural landscape of the town.
                                        Each one featuring an interview with the author and an original work by the visual artist Bece, exploring shades and connections between different layers of expression.
                                    </p>
                                    <p style={{ marginBottom: "5px", fontStyle: "italic" }}>
                                        Five artists and collectives we like, respect, or take inspiration from — all bound by passion, authenticity, and a relentless dedication to the cause. Individualities and multiplicities with whom we’re glad to share visions, spaces, struggles, and long, beautifully messed-up parties.
                                    </p>
                                </div>
                                {/* <p className="mixDescription">{mix.description}</p> */}

                                <div className="dialogLabel">
                                    <span className="dialogSymbol">[</span>
                                    <span className="dialogChar"> d</span>
                                    <span className="dialogChar">i</span>
                                    <span className="dialogChar">a</span>
                                    <span className="dialogSymbol"> /</span>
                                    <span className="dialogChar"> l</span>
                                    <span className="dialogChar">o</span>
                                    <span className="dialogChar">g </span>
                                    <span className="dialogSymbol">]</span>
                                </div>
                            </>
                        }
                        {mix.dialog && (
                            <div id="dialogSection">
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