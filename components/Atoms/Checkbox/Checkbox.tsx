import React from "react";

interface CheckBoxProps {
  label: string;
  value: boolean;
  onChange: () => void;
}
const Checkbox = ({ label, value, onChange }: CheckBoxProps) => {
  return (
    <form>
      <span className="mr-2">{label}</span>
      <input
        onChange={onChange}
        checked={value}
        type="checkbox"
        className="accent-[#8BD10B] checked:bg-[#ffff]"
      />
    </form>
  );
};

export default Checkbox;
