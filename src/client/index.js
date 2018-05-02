import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';

import App from './App';

// 1 rem = 16 px, if I use the 62.5% of the real font I use a base 10 number
const Wrapper = styled.div`
  font-size: 62.5%;
  font-family: 'Fjalla One', sans-serif;
`;

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('root')
);
