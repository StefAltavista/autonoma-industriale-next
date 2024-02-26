import Image from "next/image";
export default function Loading() {
    return (
        <div id="comingsoon-loading">
            <Image
                src="/images/logoAutonoma.png"
                width={100}
                height={90}
                alt="logoAutonoma"
            />
            <h1>LOADING...</h1>
        </div>
    );
}
