import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div className="w-[155px] px-3 py-4 rounded-lg justify-center items-center gap-2 inline-flex">
      <div className="w-6 h-6 relative" />
      <div className="text-gray-700 text-lg font-semibold leading-normal">
        {children}
      </div>
    </div>
  );
};

export default Button;
