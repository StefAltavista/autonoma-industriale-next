import "./page.css";
import Link from "next/link";
import MixSeriesData from "@/lib/mixSeriesData";

export default function MixSeriesPage() {

    return <div>
        {MixSeriesData.map((mixSeries, index) => (
            <Link key={index} href={`/mix-series/${mixSeries.id}`}>
                <h2 className="mixSeriesElement">{mixSeries.name}</h2>
            </Link>
        ))}
    </div>;
}