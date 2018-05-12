import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const FooterStyle = styled.footer`
  background-color: #388e3c;
  width: 100%;
  margin-top: 1rem;
`;

const FooterTitle = styled.h1`
  color: white;
  padding: 1rem 0;
  margin: 0;
`;

const Footer = () => (
  <FooterStyle>
    <Container>
      <FooterTitle>Lorenzo Bersano {new Date().getFullYear()}</FooterTitle>
    </Container>
  </FooterStyle>
);

export default Footer;
