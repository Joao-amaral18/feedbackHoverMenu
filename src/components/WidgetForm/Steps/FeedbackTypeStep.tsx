import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps){
    return (
        <>
        <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
        </header>
        <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={()=> onFeedbackTypeChanged(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg p-7 py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 hover:text-brand-500 focus:text-brand-500 focus:outline-none"
            >
              <span >{value.content}</span>
              <span >{value.title}</span>
            </button>
          );
        })}
      </div>
      </>
    );
}
 