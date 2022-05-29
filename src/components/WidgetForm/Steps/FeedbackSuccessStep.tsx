import { CheckSquare } from "phosphor-react";
import CloseButton from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onHandleRestartFeedback: () => void;
}
export function FeedbackSuccessStep({
  onHandleRestartFeedback,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px] ">
        <CheckSquare className="w-10 h-10 text-green-500" />
        <span className="text-xl mt-2">Agradecemos seu feedback!</span>
        <button
          onClick={onHandleRestartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-sm border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors "
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}

export default FeedbackSuccessStep;
