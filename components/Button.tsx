// components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ text, className = '', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition-colors ${className}`}
    >
      {text}
    </button>
  );
};