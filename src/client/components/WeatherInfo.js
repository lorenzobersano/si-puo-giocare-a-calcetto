import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CanPlay from './CanPlay';
import WeatherInfoCard from './WeatherInfoCard';
import Container from './Container';

// Styles
const WeatherInfoStyle = styled.section`
  font-family: 'Roboto', sans-serif;
`;

const WeatherInfoCity = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const WeatherInfoSummary = styled.h2`
  font-size: 1.2rem;
`;

// Component
const WeatherInfo = ({
  canPlay = true,
  city = 'Non trovata',
  country = 'Non trovata',
  summary = 'Riassunto del meteo non disponibile',
  weatherData = {}
}) => (
  <Fragment>
    <CanPlay canPlay={canPlay} />

    <Container>
      <WeatherInfoStyle>
        <WeatherInfoCity>
          {city}, {country}
        </WeatherInfoCity>
        <WeatherInfoSummary>{summary}</WeatherInfoSummary>
      </WeatherInfoStyle>
      {weatherData.map((element, key) => <WeatherInfoCard {...element} id={key} />)}
    </Container>
  </Fragment>
);

WeatherInfo.propTypes = {
  canPlay: PropTypes.bool,
  city: PropTypes.string,
  country: PropTypes.string,
  summary: PropTypes.string,
  weatherData: PropTypes.isRequired
};

export default WeatherInfo;
