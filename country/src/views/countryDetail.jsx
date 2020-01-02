import React, { Component } from "react";
// import axios from "axios";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
// import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import { Switch, Router } from "react-router-dom";
import "../App.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: []
    };
    this.getCountryName = this.getCountryName.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const code = props.match.params.code;
    // console.log(code);
    const countries = props.listCountries;
    const country = countries.find(
      Onecountry => Onecountry.alpha3Code === code
    );
    return {
      ...state,
      country
    };
  }

  getCountryName = borderCode => {
    let countryName = "";
    const countries = this.props.listCountries;
    console.log("from get", countries);
    countries.filter(country => {
      if (borderCode === country.alpha3Code) {
        countryName = country.name;
      }
    });
    return countryName;
  };

  render() {
    const country = this.state.country;
    return (
      <div>
        <ListGroup className="text-color">
          <ListGroup.Item>
            <h1>{country.name}</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Capital: {country.capital}</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Area: {country.area} km&#178;</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Number of inhabitants: {country.population}</h6>
          </ListGroup.Item>
          <ListGroup.Item>
            <h6>Borders -</h6>
            {(country.borders.length &&
              country.borders.map(item => (
                <ul key={country.alpha2Code}>
                  <Link className="text-color" to={`/country/${item}`}>
                    {this.getCountryName(item)}
                  </Link>
                </ul>
              ))) || <span> No Border</span>}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
