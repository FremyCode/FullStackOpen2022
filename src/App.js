import { useEffect, useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ])

  const [newName, setNewName] = useState("")

  const [newNumber, setNewNumber] = useState("")

  const [filterInput, setFilterInput] = useState("")

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterInput.toLowerCase())
  )

  console.log("Persons to show", personsToShow)

  const Persons = () => {
    return (
      <div>
        {personsToShow.map((person) => (
          <div key={person.id}>
            <p>
              {person.name} {person.number}
            </p>
          </div>
        ))}
      </div>
    )
  }

  const addPerson = (event) => {
    event.preventDefault()

    console.log("New name", newName)
    console.log("New number", newNumber)

    const personObject = {
      name: newName,
      number: newNumber,
    }

    console.log(event)

    if (persons.find((e) => e.name === newName)) {
      window.alert(`${newName} already exists`)
    } else {
      setPersons(persons.concat(personObject))
    }

    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with:{" "}
        <input
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        />
      </div>
      <div>
        <h2>Add a new contact</h2>
      </div>
      <form>
        <div>
          Name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          Number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button onClick={addPerson} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App
