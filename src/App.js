import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [filterInput, setFilterInput] = useState("")

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data)
    })
  }, [])

  console.log("Country data", countries)

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterInput.toLowerCase())
  )

  const Countries = () => {
    if (countriesToShow.length < 10) {
      return (
        <div>
          {countriesToShow.map((country) => (
            <div key={country.id}>
              <h1>{country.name.common}</h1>
            </div>
          ))}
        </div>
      )
    } else return <div>Too many results</div>
  }

  const CountryData = () => {
    if (countriesToShow.length < 2) {
      return (
        <div>
          {countriesToShow.map((country) => (
            <div key={country.id}>
              <h3>Capital: {country.capital}</h3>
              <h3>Population: {country.population}</h3>
            </div>
          ))}
        </div>
      )
    }
  }

  const CountryFlag = () => {
    if (countriesToShow.length < 2) {
      return (
        <div>
          {countriesToShow.map((country) => (
            <div key={country.id}>
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
              />
            </div>
          ))}
        </div>
      )
    }
  }

  const Languages = () => {
    if (countriesToShow.length < 2) {
      return (
        <div>
          {countriesToShow.map((country) => (
            <div key={country.id}>
              <h3>Languages:</h3><p>{JSON.stringify(country.languages)}</p>
            </div>
          ))}
        </div>
      )
    }
     
  }


  return (
    <div>
      <div>
        Find countries:{" "}
        <input
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        />
      </div>
      <Countries />
      <CountryData />
      <CountryFlag />
      <Languages />
    </div>
  )
}

export default App
