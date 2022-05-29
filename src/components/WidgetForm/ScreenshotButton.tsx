import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakeingScreenshot, setIsTakeingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakeingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTook(base64image);

    setIsTakeingScreenshot(false);
  }
  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-sm border-transparent flex justify-center items-center text-zinc-400 hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 300,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  } else {
    return (
      <button
        onClick={handleTakeScreenshot}
        type="button"
        className="
            p-2 text-zinc-300 hover:text-zinc-100 bg-zinc-800 rounded-sm border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      >
        {isTakeingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
      </button>
    );
  }
}
export default ScreenshotButton;
