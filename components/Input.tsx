import React from "react";

interface InputProps {
  id: string;
  type?: string;
  label: string;
  value: string;
  onChange: any;
}

const Input: React.FC<InputProps> = ({ id, type, label, value, onChange }) => {
  return (
    <div className="relative">
      <input
        id={id}
        placeholder=" "
        type={type}
        value={value}
        className="
  block
  rounded-md
  px-6
  pt-6
  pb-1
  w-full
  text-md
  text-white
  bg-neutral-700
  appearance-none
  focus:outline-none
  focus:ring-0
  peer
  "
      />
      <label
        htmlFor={id}
        onChange={onChange}
        className="
        absolute
      text-zinc-400
      text-md
      top-4
      z-10
      left-6
      -translate-y-3
      scale-75
      origin[0]
      duration-150
      transform
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-3
      "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
