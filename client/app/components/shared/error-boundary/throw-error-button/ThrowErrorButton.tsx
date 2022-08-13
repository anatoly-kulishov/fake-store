import React, { FC, useState } from 'react';

const ThrowErrorButton: FC = () => {
  const [error, setError] = useState<Error>();

  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }

  return (
    <button
      className="inline-block px-3 py-3 text-white leading-4 rounded-md cursor-pointer select-none bg-red-500 border-red-500 transition-all hover:bg-red-600 hover:border-red-600"
      onClick={onClick}
    >
      Throw an error
    </button>
  );
};

export default ThrowErrorButton;
