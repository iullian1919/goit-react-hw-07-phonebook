import React from 'react';
import Backdrop from 'components/Backdrop/Backdrop';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Backdrop>
      <InfinitySpin width="200" color="#a9584d" />
    </Backdrop>
  );
};
export default Loader;
