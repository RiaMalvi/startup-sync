import clsx from "clsx";
import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  completed?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  loading,
  disabled,
  completed,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-5 bg-blue-600 text-sm text-white rounded-md py-3 hover:bg-blue-600/90 transition-all duration-300 font-semibold disabled:bg-[#757579a4] disabled:text-[#7e7e81] disabled:cursor-not-allowed",
        loading && "bg-repeating-linear-gradient scale-95",
        className
      )}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex gap-3">
          <span>Loading...</span>
        </div>
      ) : completed ? (
        "Completed"
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
