import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

interface SliderToggleProps {
  selected: string;
  setSelected: (value: string) => void;
}

export function ToggleThemeButton() {
  const [selected, setSelected] = useState("black");

  return (
    <div
      className={`grid place-content-center px-4 transition-colors 
      }`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
}

function SliderToggle({ selected, setSelected }: SliderToggleProps) {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES}`}
        onClick={() => {
          setSelected("lofi");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} `}
        onClick={() => {
          setSelected("black");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "black" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
}
