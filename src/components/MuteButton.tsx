import Image from "next/image";
import { useState } from "react";

export default function MuteButton({ videoRef, visible }: any) {
    const [muteIcon, setMuteIcon] = useState(false);

    return (
        <div
            className="mute"
            style={{
                position: "fixed",
                bottom: "10px",
                right: "10px ",
                backgroundColor: "red",
                zIndex: "2",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",

                alignItems: "center",
                opacity: visible ? "100%" : "0%",
            }}
        >
            <Image
                alt="mute button"
                className="mute"
                onClick={() => {
                    videoRef.current.muted = !muteIcon;
                    setMuteIcon(!muteIcon);
                }}
                src={muteIcon ? "/icons/SoundOff.png" : "/icons/SoundOn.png"}
                width={20}
                height={20}
            />
        </div>
    );
}
