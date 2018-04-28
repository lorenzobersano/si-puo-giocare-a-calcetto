import React, { Component, Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

import { getLocation } from "./utils/utils";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherInfo: undefined
    };
  }

  async componentDidMount() {
    let weatherInfo;

    try {
      const pos = await getLocation();

      const response = await fetch("/api/weatherInfo", {
        method: "POST",
        body: JSON.stringify(pos),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });

      weatherInfo = await response.json();
    } catch (e) {
      alert(e);
    }

    this.setState({ weatherInfo });
  }

  render() {
    return (
      <Fragment>
        {this.state.weatherInfo ? (
          <Fragment>
            <Header />
            <WeatherInfo {...this.state.weatherInfo} />
            <Footer />
          </Fragment>
        ) : (
          <Loading />
        )}
      </Fragment>
    );
  }
}
