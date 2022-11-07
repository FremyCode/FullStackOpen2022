import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])

  const [newName, setNewName] = useState("")

  const addName = (event) => {

    event.preventDefault()

    console.log(persons)

    if (persons.find(e => e.name === newName)) {
      window.alert(`${newName} already exists`)
    } else {setPersons([...persons, {name: newName}])}

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
           />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App
