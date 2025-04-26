import { useRef, useState } from "react";
import { workingProcessInterface } from "../../types/workingProcess";
import { addLeadingZero } from "../../utils/numbers";

function Accordion({ data, index }: { data: workingProcessInterface; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0 ? true : false); // Open the first accordion by default
  const contentRef = useRef<HTMLParagraphElement>(null);

  const { title, description } = data;

  function toggleAccordion() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`${isOpen ? "bg-primary" : "bg-gray"} duration-normal rounded-4xl border border-b-4 p-2 transition lg:p-6`}>
      <button onClick={toggleAccordion} className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg p-2 focus-visible:outline">
        <div className="flex items-center gap-4 font-medium">
          <span className="text-2xl lg:text-5xl">{addLeadingZero(index + 1)}</span>
          <h4 className="text-left lg:text-3xl">{title}</h4>
        </div>

        <div className="bg-gray rounded-full border p-[1px] lg:p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`duration-normal size-8 transition ${isOpen ? "rotate-45" : ""}`}>
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
        </div>
      </button>

      <div className={`duration-normal max-h-96 overflow-hidden`} style={{ maxHeight: isOpen ? contentRef.current?.offsetHeight : "0px" }}>
        <span className={`mx-auto block h-[1px] bg-black ${isOpen ? "w-full" : "w-0"} duration-normal`}></span>
        <p ref={contentRef} className="p-4">
          {description}
        </p>
      </div>
    </div>
  );
}
export default Accordion;
