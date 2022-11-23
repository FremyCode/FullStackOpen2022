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
              {/* Languages are an object nested inside of array so rendering them is a mystery to me and Google */}
              <h3>Languages</h3><p>{JSON.stringify(country.languages)}</p>
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
