import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  align-items: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Loading = () => (
  <LoadingWrapper>
    <img
      src="../../../node_modules/loading-svg/loading-spin.svg"
      alt="Caricamento in corso"
    />
  </LoadingWrapper>
);

export default Loading;
