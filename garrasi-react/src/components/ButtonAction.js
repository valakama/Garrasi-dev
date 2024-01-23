import React from "react";

function ButtonAction({ onClick, text, isTextWhite }) {
  const textColorClass = isTextWhite ? "text-white" : "text-black";
  const colorBorderClass = isTextWhite ? "border-white" : "border-black";

  return (
    <div
      onClick={onClick}
      className={`border-2 ${colorBorderClass} font-bold cursor-pointer lg:mx-8 text-xl flex items-center justify-center ${textColorClass} px-12 h-12 rounded-xl`}
    >
      {text}
    </div>
  );
}

export default ButtonAction;
