import React, { Component, Fragment } from "react";
import styled from "styled-components";

import CanPlay from "./CanPlay";
import WeatherInfoCard from "./WeatherInfoCard";
import Container from "./Container";

// Styles
const WeatherInfoStyle = styled.section`
  font-family: "Roboto", sans-serif;
`;

const WeatherInfoCity = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const WeatherInfoSummary = styled.h2`
  font-size: 1.2rem;
`;

// Component
const WeatherInfo = props => (
  <Fragment>
    <CanPlay canPlay={props.canPlay} />

    <Container>
      <WeatherInfoStyle>
        <WeatherInfoCity>
          {props.city}, {props.country}
        </WeatherInfoCity>
        <WeatherInfoSummary>{props.summary}</WeatherInfoSummary>
      </WeatherInfoStyle>
      {props.weatherData.map((element, key) => {
        return <WeatherInfoCard {...element} key={key} id={key} />;
      })}
    </Container>
  </Fragment>
);

export default WeatherInfo;
