import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/lightbulb.svg";
import otherImage from "../../assets/chat-circle.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      source: bugImage,
      alt: "Bug image",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImage,
      alt: "ideia image ",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImage,
      alt: "chat-circle image",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

        const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null)

        function handleRestartFeedback(){
          setFeedbackType(null);
        }

        
  return (
    <div className="bg-zinc-900 relative rounded-2xl p-4 mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
      
     {!feedbackType?(
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
     )
     :
     (
        <FeedbackContentStep sendFeedbackType={feedbackType}
          onHandleRestartFeedback={handleRestartFeedback}
        />
     )
     }
      <footer className="text-xs text-neutral-700">made by Amaral</footer>
    </div>
  );
}
export default WidgetForm;
