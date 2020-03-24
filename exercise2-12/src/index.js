import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

const Display = (props) => {
  const {countries} = props;

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
  } else if (countries.length === 1) {
    return (
      <div>
        <h1> {countries[0].name} </h1>
        <p> Capital: {countries[0].capital} </p>
        <p> Population: {countries[0].population} </p>
        <h2> Languages: </h2>
        <ul>
          {countries[0].languages.map(language => 
            <li key = {language.iso639_2}> {language.name} </li>
          )}
        </ul>
        <p>
          <img src =
            {`https://restcountries.eu/data/${countries[0].alpha3Code.toLowerCase()}.svg`}
            alt = {`The flag of ${countries[0].name}`}
          />
        </p>
      </div>
    )
  } else {
    return (
      <div>
        <ul>
          {countries.map(country =>
            <li key = {country.alpha3Code}> {country.name} </li>
          )}
        </ul>
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