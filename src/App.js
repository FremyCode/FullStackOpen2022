import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1231244" },
  ])

  const [newName, setNewName] = useState("")

  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    
    event.preventDefault()

    console.log("New name" , newName)
    console.log("New number", newNumber)

    const personObject = {
      name: newName,
      number: newNumber
    }

    console.log(event)

    if (persons.find((e) => e.name === newName)) {
      window.alert(`${newName} already exists`)
    } else {
      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
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
      {persons.map((person) => (
        <p key={person.name}>{person.name + " " + person.number}</p>
      ))}
    </div>
  )
}

export default App
