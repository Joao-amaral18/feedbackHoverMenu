import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState, useTransition } from "react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface FeedbackTypeStepProps {
  sendFeedbackType: FeedbackType;
  onHandleRestartFeedback: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  sendFeedbackType,
  onHandleRestartFeedback,
  onFeedbackSent,
}: FeedbackTypeStepProps) {
  const feedbackTypeInfo = feedbackTypes[sendFeedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    console.log({
      comment,
      screenshot,
    });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          onClick={onHandleRestartFeedback}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[340px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100
         border-zinc-700 bg-transparent
        rounded-md focus:border-brand-500 
        focus:ring-brand-500 focus:ring-1 
        resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo!"
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment === ""}
            className="p-2 text-zinc-100 bg-brand-500 rounded-sm border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
export default FeedbackContentStep;
