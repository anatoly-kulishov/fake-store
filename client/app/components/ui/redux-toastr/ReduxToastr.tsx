import React, { FC } from 'react';
import ReduxToastrLib from 'react-redux-toastr';

const ReduxToastr: FC = () => {
  return (
    <ReduxToastrLib
      newestOnTop={false}
      preventDuplicates
      progressBar
      timeOut={40000}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeOnToastrClick
    />
  );
};

export default ReduxToastr;
