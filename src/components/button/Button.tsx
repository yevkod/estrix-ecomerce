import React from 'react';

interface ButtonProps {
  text: string;
  imgs?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  text,
  imgs,
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <div>
      <button
        className={`flex bg-gray-400 ${
          imgs ? 'gap-7' : ''
        } mx-auto hover:scale-105 transition-all w-full py-2 items-center px-4 text-white rounded-md ${className} `}
        onClick={onClick}
        {...rest}
      >
        <div>
          <img src={imgs} alt="" />
        </div>
        <div>{text}</div>
      </button>
    </div>
  );
};
