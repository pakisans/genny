import { memo, useState } from "react";
import { twMerge } from "tailwind-merge";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import useClickOutside from "../hooks/useClickOutside";

const Select = ({
  options,
  selectedOption,
  onSelectOption,
  selectContainerClass,
  optionContainerClass,
  mainContainerClass,
  iconColor,
  optionMainContainerClass,
  formatOption = (option) => option.toString(),
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useClickOutside(isOpen, () => setIsOpen(false));
  const combinedMainContainerClass = twMerge("relative", mainContainerClass);
  const combinedSelectContainerClass = twMerge(
    "py-[.4rem] pl-[1.2rem] pr-[.6rem] leading-normal border cursor-pointer flex items-center justify-between rounded-[1rem] text-white text-[1.2rem]",
    selectContainerClass
  );
  const combinedOptionContainerClass = twMerge(
    "px[.2rem] py-[.1rem] cursor-pointer text-[1.5rem] z-[999] relative text-white",
    optionContainerClass
  );
  const combinedOptionMainContainerClass = twMerge(
    "absolute flex gap-1 w-full border text-white rounded-md text-center text-white bottom-0 left-[6rem]",
    optionMainContainerClass
  );

  const handleSelection = (option) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} role="listbox" className={combinedMainContainerClass}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={combinedSelectContainerClass}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Space") {
            setIsOpen(!isOpen);
          }
        }}
      >
        {formatOption(selectedOption)}
        <div className="py-[.4rem] px-[.4rem] ml-[.9rem]">
          {!isOpen ? (
            <ChevronDownIcon
              styles={"-rotate-90"}
              width={10.5}
              height={6}
              color={iconColor}
            />
          ) : (
            <ChevronDownIcon
              styles={"rotate-90"}
              width={10.5}
              height={6}
              color={iconColor}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className={combinedOptionMainContainerClass}>
          {options.map((option, index) => (
            <div
              key={`option-${index}`}
              onClick={() => handleSelection(option)}
              className={combinedOptionContainerClass}
              aria-selected={option === selectedOption}
              role="option"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Space") {
                  onSelectOption(option);
                  setIsOpen(false);
                }
              }}
            >
              {formatOption(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Select);
