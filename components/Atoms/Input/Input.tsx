import React from "react";
import { string } from "yup";
interface IinputProps {
  label: string;
  subLabel: string;
  name?: string;
  type?: string;
  // value: string;
  errorMessage?: string | false | undefined;
  className?: string;
  onChange: (e: any) => void;
}
const Input = ({
  label,
  subLabel,
  name,
  type,
  errorMessage,
  className,
  onChange,
}: IinputProps) => {
  return (
    <form>
      <div className="text-[14px] font-extrabold">
        {label}{" "}
        <span className="font-normal ml-5">
          {errorMessage && `(${errorMessage})`}
        </span>
      </div>
      <input
        className={className}
        type={type}
        name={name}
        onChange={onChange}

        // value={value}
      />
    </form>
  );
};

export default Input;
