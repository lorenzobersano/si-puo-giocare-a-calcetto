import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const HeaderStyle = styled.header`
  background-color: #4caf50;
  padding: 1rem 0;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  color: white;
  margin: 0;

  @media (max-width: 45rem) {
    font-size: 1.5rem;
  }
`;

const Header = () => (
  <HeaderStyle>
    <Container>
      <HeaderTitle>SiPuòGiocareACalcetto?</HeaderTitle>
    </Container>
  </HeaderStyle>
);

export default Header;
