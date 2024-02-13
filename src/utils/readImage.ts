export default function readImage(
    img: File
): Promise<ArrayBuffer | null | string> {
    return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);

        try {
            reader.onloadend = () => {
                let preview = reader.result;
                // ScaleImage(preview);
                res(preview);
            };
        } catch {
            (e: Error) => {
                rej(e);
            };
        }
    });
}
