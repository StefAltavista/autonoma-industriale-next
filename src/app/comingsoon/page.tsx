"use client";
import "./comingsoon.css";
import Image from "next/image";
import { useRef, useState } from "react";
export default function ComingSoon() {
    const videoRef = useRef<any>();
    const [enter, setEnter] = useState(false);

    const enterPage = () => {
        videoRef.current.play();
        setEnter(true);
    };

    return (
        <div>
            {!enter ? (
                <div id="comingsoon-intro">
                    <Image
                        src="/images/logoAutonoma.png"
                        width={100}
                        height={90}
                        alt="logoAutonoma"
                        onClick={enterPage}
                    />
                    <h1>E N T E R</h1>
                </div>
            ) : null}
            <div className={enter ? "open" : "close"}>
                <video
                    className="video"
                    loop
                    ref={videoRef}
                    playsInline
                    preload="true"
                >
                    <source
                        src="/videos/Teaser16March2024.mp4"
                        type="video/mp4"
                    />
                </video>
                <div id="comingsoon">
                    <Image
                        src="/images/comingsoon/poster_transparent.png"
                        alt="poster"
                        width={2480}
                        height={2480}
                        id="transparentlayer"
                    />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed porta ante nec elit sollicitudin, a accumsan eros
                        condimentum. Nam in turpis rutrum, rhoncus massa sit
                        amet, gravida augue. Aenean consectetur ligula sit amet
                        placerat cursus. Proin tempus ut elit sit amet
                        porttitor. Nam egestas elit mi, ut varius nunc lacinia
                        at. Phasellus viverra maximus ligula et consectetur.
                        Pellentesque porta et massa eu ultricies. Nam luctus
                        metus sit amet felis porttitor, et lacinia erat
                        facilisis. Maecenas sed bibendum est, dapibus laoreet
                        odio. Morbi dignissim ornare feugiat. Proin dignissim
                        purus ipsum, in pulvinar purus accumsan id.
                    </p>

                    <Image
                        src="/images/comingsoon/Hand.png"
                        alt="poster"
                        width={2480}
                        height={2480}
                        className="flash"
                    />

                    <p>
                        Pellentesque nisl nisi, lacinia ac hendrerit sit amet,
                        euismod in augue. Morbi tincidunt, risus at congue
                        porta, nunc arcu rhoncus ligula, ut suscipit elit ipsum
                        sit amet lorem. Ut maximus egestas nunc vitae imperdiet.
                        Sed lectus ipsum, gravida at quam eget, fringilla
                        lobortis massa. Duis dictum mattis nisl et malesuada.
                        Morbi cursus tellus molestie nibh tincidunt, et
                        consectetur quam pretium. Nam ut erat sapien. In at
                        volutpat arcu, quis feugiat elit. Morbi dignissim velit
                        condimentum, ullamcorper ipsum porta, vestibulum erat.
                        Duis at risus at enim pretium vestibulum. Pellentesque
                        elit velit, tristique efficitur maximus et, vestibulum
                        quis mauris. Aenean congue ipsum sagittis erat dapibus,
                        vitae tempor ex molestie. Sed eleifend maximus lobortis.
                        Donec egestas felis a odio cursus rhoncus. Proin
                        volutpat dolor magna, dapibus sollicitudin ex venenatis
                        quis. Nullam vel odio tortor. Maecenas ac euismod felis.
                        Sed porttitor suscipit ante nec suscipit. Vestibulum sed
                        quam quis leo semper maximus. Phasellus sed faucibus
                        nisl, consequat vestibulum dui.{" "}
                    </p>
                    <Image
                        src="/images/comingsoon/Header.png"
                        alt="poster"
                        width={2480}
                        height={2480}
                        className="flash"
                    />
                    <p>
                        Nunc efficitur massa in massa rutrum, sit amet tincidunt
                        justo feugiat. Suspendisse lectus purus, auctor a
                        consectetur sit amet, commodo a magna. Curabitur metus
                        justo, porttitor id leo ullamcorper, elementum tempus
                        nunc. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec
                        vehicula interdum imperdiet. Nam volutpat, libero et
                        lobortis congue, turpis erat interdum justo, in interdum
                        quam mauris sed lacus. In vehicula diam non turpis
                        rhoncus molestie. Sed malesuada feugiat sem, quis auctor
                        eros. Fusce gravida urna nisl, at suscipit nisi commodo
                        vitae. In vitae pharetra lorem. In rutrum pretium nulla
                        at congue. Aenean quis sollicitudin nunc. Nullam vitae
                        malesuada lectus, sed posuere nibh. Duis pellentesque,
                        odio quis ultrices molestie, mi lectus scelerisque enim,
                        et imperdiet purus est at urna. Nulla sed dignissim
                        orci. Sed massa sapien, commodo et rutrum vulputate,
                        facilisis sit amet velit. Etiam tristique placerat
                        blandit. Quisque vitae tellus eget ex fringilla lacinia.{" "}
                    </p>
                    <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut vitae condimentum ex, eget sagittis massa. Duis
                        sodales vitae ipsum in consequat. Vivamus vel mi a quam
                        faucibus ultricies sit amet eu eros. Etiam pellentesque
                        consequat tortor eget porta. Donec laoreet ornare neque,
                        sed fermentum ex efficitur non. Integer et nisl nec leo
                        facilisis hendrerit.
                    </p>
                    <div className="comingsoon-space"></div>
                </div>
            </div>
        </div>
    );
}
