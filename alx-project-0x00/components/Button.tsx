// alx-project-0x00/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ shape = 'rounded-md', children, className = '', ...props }) => {
  const shapeClass = shape;
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white ${shapeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
