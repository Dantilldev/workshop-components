import React from 'react';

const buttons = {
  sizes: {
    small: 'text-sm w-24',
    medium: 'text-base w-36',
    large: 'text-lg w-48',
  },
  colors: {
    red: 'bg-red-600  text-white',
    blue: 'bg-blue-500 text-white hover:bg-blue-200',
    green: 'bg-green-700 text-white hover:bg-blue-200',
  },
  disable: {
    true: `${true} cursor-not-allowed opacity-50`,
    false: false,
  },
};

export default function ButtonComponent({color, size, disable, children}) {
  const colorClass = buttons.colors[color];
  const sizesClass = buttons.sizes[size];
  const disabledClass = buttons.disable[disable];

  return (
    <button
      className={`${colorClass} ${sizesClass} ${disabledClass} border-2 p-2 rounded-md `}
      disabled={disabledClass}
    >
      {children}
    </button>
  );
}
