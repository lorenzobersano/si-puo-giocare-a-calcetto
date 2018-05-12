import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './Container';

const CanPlayStyle = styled.div`
  font-size: 3rem;
  background-color: #8bc34a;
  display: flex;

  @media (max-width: 45rem) {
    font-size: 2rem;
  }
`;

const CanPlay = ({ canPlay = true }) => (
  <CanPlayStyle>
    <Container>
      {canPlay ? (
        <h1>
          Sì!{' '}
          <span role="img" aria-label="festa">
            🎉
          </span>
        </h1>
      ) : (
        <h1>
          No...{' '}
          <span role="img" aria-label="triste">
            😭
          </span>
        </h1>
      )}
    </Container>
  </CanPlayStyle>
);

CanPlay.propTypes = {
  canPlay: PropTypes.bool
};

export default CanPlay;
