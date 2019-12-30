import React, { Component } from "react";
import axios from "axios";

export default class extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      countries: null
    };
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log(response.data);
        this.setState({
          countries: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const listCountries = this.state.countries;
    return (
      (!listCountries && (
        <div>
          <h1>Loading...</h1>
        </div>
      )) || (
        <div>
          {listCountries.map(countries => (
            <div>
              <p key={countries.alpha2Code}>{countries.name}</p>
              <img src={countries.flag}></img>
            </div>
          ))}
        </div>
      )
    );
  }
}
