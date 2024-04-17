import React, { memo } from "react";

type props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  title: string | JSX.Element;
  className?: string | undefined;
};
function Button({ title, onClick, disabled, className }: props) {
  return (
    <>
      <button
        disabled={disabled || false}
        className={`focus:outline-none  ${
          className ? className : "bg-primary text-base border-none"
        }`}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
}

export default memo(Button);
