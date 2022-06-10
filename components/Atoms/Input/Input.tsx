import React from "react";

const Input = ({ label, subLabel }: any) => {
  return (
    <form>
      <div className="text-[14px] font-extrabold">
        {label} <span className="font-normal ml-5">{subLabel}</span>
      </div>
      <input className="outline-none border-b-2 border-[#8BD10B] w-full" />
    </form>
  );
};

export default Input;
