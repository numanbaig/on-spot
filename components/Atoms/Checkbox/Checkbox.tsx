import React from "react";

const Checkbox = ({ label }: any) => {
  return (
    <form>
      <span className="mr-2">{label}</span>
      <input type="checkbox" className="accent-[#8BD10B] checked:bg-[#ffff]" />
    </form>
  );
};

export default Checkbox;
