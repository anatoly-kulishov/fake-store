import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { IField } from '@/components/ui/form-elements/form.interface';

const Field = forwardRef<HTMLInputElement, IField>(({ placeholder, error, type = 'text', style, ...rest }, ref) => {
  return (
    <div className="" style={style}>
      <label>
        <span className="text-sm">{placeholder}</span>
        <input
          className={classNames(
            'form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0',
            {
              'border-2 border-red-600 outline-red-600': error,
              'focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none': !error,
            },
          )}
          ref={ref}
          type={type}
          {...rest}
        />
      </label>
      {error && <small className="text-red-600">{error.message}</small>}
    </div>
  );
});

Field.displayName = 'Field';

export default Field;
