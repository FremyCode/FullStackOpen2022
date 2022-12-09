import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [filterInput, setFilterInput] = useState("")

  const [countries, setCountries] = useState([])

  let [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterInput.toLowerCase())
      )
      setCountries(res.data)
      setCountriesToShow(filteredCountries)
      console.log("Useeffect countries", countriesToShow)
    })
  }, [filterInput])


  const showCountry = (country) => {
    console.log("Show:", country)
    setCountriesToShow(country)
    console.log("Countries to show:", countriesToShow)
  }

  const Countries = () => {
    if (countriesToShow.length < 10) {
      return (
        <div>
          {countriesToShow.map((country) => (
            <div key={country.id}>
              <h1>{country.name.common}</h1>
              <button onClick={() => showCountry(country)} type="submit">
                Show
              </button>
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
              <div>
                <h3>Capital</h3>
                <p>{country.capital}</p>
              </div>
              <div>
                <h3>Population</h3>
                <p>{country.population}</p>
              </div>
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
              <h3>Languages</h3>
              <p>{JSON.stringify(country.languages)}</p>
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
      <Languages />
      <CountryFlag />
    </div>
  )
}

export default App
