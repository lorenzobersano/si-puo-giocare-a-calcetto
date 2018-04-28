import React, { Component, Fragment } from "react";
import styled from "styled-components";

import Container from "./Container";

const CanPlayStyle = styled.div`
  font-size: 3rem;
  background-color: #8bc34a;
  display: flex;

  @media (max-width: 45rem) {
    font-size: 2rem;
  }
`;

const CanPlay = props => (
  <CanPlayStyle>
    <Container>
      {props.canPlay !== undefined ? (
        props.canPlay ? (
          <h1>Sì! 🎉</h1>
        ) : (
          <h1>No... 😭</h1>
        )
      ) : (
        <h1>Sto cercando di recuperare il meteo per la tua zona...</h1>
      )}
    </Container>
  </CanPlayStyle>
);

export default CanPlay;
