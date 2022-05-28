import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import {Popover} from "@headlessui/react"
import {WidgetForm } from "./WidgetForm"

export function Widgets() {


  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel><WidgetForm/></Popover.Panel>
      <Popover.Button className="rounded-full bg-brand-500 px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all ease-linear duration-500">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

export default Widgets;
