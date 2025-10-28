
import "./page.css";
import Link from "next/link";
import MixSeriesData from "@/lib/mixSeriesData";
export default function MixSeries() {
    return (
        <div className="mixSeriesSimplePageContainer">
            <div className="mixSeriesSimpleTitleWrap">
                <h1 className="mixSeriesSimpleTitle">Autonoma Industriale<br /><span className="mixSeriesSimpleSubtitle">Mix Series</span></h1>
            </div>
            {MixSeriesData.map((mixSeries, index) => (
                <Link key={index} href={`/mix-series/${mixSeries.id}`}>
                    <h2 className="mixSeriesSimpleLink">{mixSeries.name}</h2>
                </Link>
            ))}
        </div>
    );
}