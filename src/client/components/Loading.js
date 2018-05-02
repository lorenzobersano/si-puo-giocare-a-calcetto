import React from 'react';
import styled from 'styled-components';

import LoadingSpinner from '../../../public/assets/images/loading-spin.svg';

const LoadingWrapper = styled.div`
  align-items: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Loading = () => (
  <LoadingWrapper>
    <img src={LoadingSpinner} alt="Caricamento in corso" />
  </LoadingWrapper>
);

export default Loading;
