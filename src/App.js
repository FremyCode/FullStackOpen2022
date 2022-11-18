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

              {country.languages.map((language, index) => {
              return (
                <div key={index}>
                  <h2>{language}</h2>
                </div>
              );
            })}

            </div>
          ))}
        </div>
      )
    } else return <div>Too many results</div>
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
    </div>
  )
}

export default App
