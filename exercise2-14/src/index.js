import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
require("./styles.css");

const Display = (props) => {
  const {countries} = props;
  const [individualCountry, setIndividualCountry] = useState({})

  if (countries.length === 0) {
    return (
      <div>
        <p> No results found. </p>
        <p> Revisit your search terms and try again. </p>
      </div>
    )
  } else if (countries.length > 10) {
    return (
      <div>
        <p> Input some further search terms to show a filtered list of countries. </p>
        <p> The result will include ten (10) countries at most. </p>
      </div>
    )
  } else if (countries.length > 1) {
    return (
      <div>
        <ul>
          {countries.map(country =>
            <li key = {country.alpha3Code}>
              {country.name}
              <button onClick = {() => {
                setIndividualCountry(country);
              }
              }>
                Detailed information
              </button>
              {individualCountry === country
                  ? <CountryInfo country = {country} />
                  : null
              }
            </li>
          )}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <CountryInfo country = {countries[0]} />
      </div>
    )
  }
}

const Filter = (props) => {
  const {countries, handleSearching, searchTerms} = props;
  return (
    <div>
      <p>
        Search for a country:
        <input
          value = {searchTerms}
          onChange = {handleSearching}
        />
      </p>
      <Display countries = {countries.filter(country =>
        country.name.toLowerCase().includes(searchTerms.toLowerCase()) === true
      )} />
    </div>
  )
}

const CountryInfo = (props) => {
  const {country} = props;
  const [weather, setWeather] = useState({});
  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${country.capital}`)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [key, country.capital]
  )

  return (
    <div>
      <h1> {country.name} </h1>
        <p> Capital: {country.capital} </p>
        <p> Population: {country.population} </p>
        <h2> Languages: </h2>
        <ul>
          {country.languages.map(language => 
            <li key = {language.iso639_2}> {language.name} </li>
          )}
        </ul>
        <p>
          <img src =
            {`https://restcountries.eu/data/${country.alpha3Code.toLowerCase()}.svg`}
            alt = {`The flag of ${country.name}`}
          />
        </p>
        <h2> Weather in {country.capital} </h2>
        <h3> Conditions at {weather.last_updated} local time</h3>
        <p> Temperature: {weather.temp_c}° C </p>
        <p> Wind: {weather.wind_kph} km/h (gusts at {weather.gust_kph} km/h) </p>
        <p> Humidity: {weather.humidity} % </p>
    </div>
  )
}


const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, []
  )

  const handleSearching = (event) => {
    setSearchTerms(event.target.value)
  }

  return (
    <div>
      <Filter
        countries = {countries}
        handleSearching = {handleSearching}
        searchTerms = {searchTerms}
      />
    </div>
  )


}

ReactDOM.render(<App />, document.getElementById('root'));