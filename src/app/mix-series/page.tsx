import "./mixSeriesList.css";
import Link from "next/link";
import mixSeriesData from "@/lib/mixSeriesData";
import type { MixSeriesDataType } from "@/lib/mixSeriesData";
export default function MixSeries() {
  const dialog = (
    <details style={{ marginBottom: "1rem" }}>
      <summary
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: "#ab0000",
        }}
      >
        About this edition
      </summary>
      <p style={{ marginBottom: "5px", fontStyle: "italic" }}>
        [dia/log] is a convergence of sounds, stories and original graphics for
        a special edition of five episodes, one every month till the end of the
        year.
      </p>
      <p style={{ fontStyle: "italic" }}>
        Each episode focusing on an emerging artist whose work, both solo and
        within their collective, is contributing to redefine the cultural
        landscape of the town. Each one featuring an interview with the author
        and an original work by the visual artist Bece, exploring shades and
        connections between different layers of expression.
      </p>
      <p style={{ marginBottom: "5px", fontStyle: "italic" }}>
        Five artists and collectives we like, respect, or take inspiration from
        — all bound by passion, authenticity, and a relentless dedication to the
        cause. Individualities and multiplicities with whom we’re glad to share
        visions, spaces, struggles, and long, beautifully messed-up parties.
      </p>
    </details>
  );
  return (
    <div className="mixSeriesSimplePageContainer">
      <div className="mixSeriesSimpleTitleWrap">
        <h1 className="mixSeriesSimpleTitle">Mix Series</h1>
      </div>
      {Object.entries(
        mixSeriesData.reduce<Record<string, MixSeriesDataType[]>>(
          (acc, mix: MixSeriesDataType) => {
            if (!acc[mix.edition]) acc[mix.edition] = [];
            acc[mix.edition].push(mix);
            return acc;
          },
          {}
        )
      ).map(([edition, mixes]) => (
        <div key={edition} className="edition-section">
          <h2 style={{ marginTop: "100px" }}>{edition}</h2>
          {mixes.map((mix) => (
            <Link key={mix.id} href={`/mix-series/${mix.id}`}>
              <h3 className="mixSeriesSimpleLink">{mix.name}</h3>
            </Link>
          ))}
          {edition == "[dia/log]" && dialog}
        </div>
      ))}
    </div>
  );
}
