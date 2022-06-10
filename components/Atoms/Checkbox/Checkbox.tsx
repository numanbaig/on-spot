import React from "react";

const Checkbox = ({ label }: any) => {
  return (
    <form>
      <span className="mr-2">{label}</span>
      <input type="checkbox" />
    </form>
  );
};

export default Checkbox;
