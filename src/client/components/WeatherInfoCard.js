import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Skycons from 'react-skycons';
import toSnakeCase from 'lodash.snakecase';
import capitalize from 'lodash.capitalize';

import Footer from './Footer';
import {
  convertTimestamp,
  convertPrecipProbability,
  convertPrecipIntensity,
  roundTemperature,
  putIcon
} from '../utils/utils';

// CSS
const WeatherInfoCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-family: 'Roboto', sans-serif;
  background-color: #eee;
  border-bottom: 0.5rem solid #fff;
`;

const WeatherInfoGeneralInfo = styled.div`
  font-size: 1rem;
  max-width: 17rem;
`;

const WeatherInfoMaxTemp = styled.div``;

const WeatherInfoWeatherPic = styled.div`
  width: 20%;
  height: 20%;

  @media (max-width: 45rem) {
    width: 0px;
    width: 0px;
  }
`;

const Temperature = styled.h1`
  font-size: 2.5rem;
`;

// React Component
export default class WeatherInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    return (
      <Fragment>
        <WeatherInfoCardStyle>
          <WeatherInfoGeneralInfo>
            <h2>{capitalize(convertTimestamp(this.state.time))}</h2>
            {this.state.summary}
            <p>
              Probabile al {convertPrecipProbability(this.state.precipProbability)} che piova ({convertPrecipIntensity(this.state.precipIntensity)})
            </p>
          </WeatherInfoGeneralInfo>
          <WeatherInfoMaxTemp>
            <Temperature>{roundTemperature(this.state.temperatureHigh)}°C</Temperature>
          </WeatherInfoMaxTemp>
          <WeatherInfoWeatherPic>
            <Skycons color="black" icon={toSnakeCase(this.state.icon).toUpperCase()} />
          </WeatherInfoWeatherPic>
        </WeatherInfoCardStyle>
      </Fragment>
    );
  }
}
