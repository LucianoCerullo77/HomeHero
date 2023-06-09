import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: JSX.Element;
}

const ButtonDetail: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="w-20 absolute inset-y-0 right-0 flex items-center sm:hidden pr-2 text-[#FFF]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonDetail;
