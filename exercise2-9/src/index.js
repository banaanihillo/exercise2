import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [persons, setPersons] = useState([
        {name: "Heini Sirkka", number: "555-CRIKEY", id: Math.random()},
        {name: "Random Number", number: Math.random(), id: Math.random()}
    ]);
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [searchTerms, setSearchTerms] = useState("")

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: (persons.some(person => person.name === newName)) ? null : newName,
            number: newNumber,
            id: persons.length + 1
        }

        if (personObject.name === null) {
            window.alert(`${newName} already exists!`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName("")
            setNewNumber("")
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleSearching = (event) => {
        console.log(event.target.value)
        setSearchTerms(event.target.value)
    }

    return (
        <div>
            <h1> Names and Numbers </h1>
            <p>
                Search for a name: <input
                    value = {searchTerms}
                    onChange = {handleSearching} />
            </p>
            <ul>
                {persons.filter(person =>
                    person.name.includes(searchTerms.toLowerCase()) === true
                ).map(person =>
                        <li key = {person.id}> {person.name}: {person.number} </li>
                )}
            </ul>
            <h2> Add a new entry here </h2>
            <form onSubmit = {addPerson} >
                <p> Name: <input
                    value = {newName}
                    onChange = {handleNameChange} /> </p>
                <p> Number: <input
                    value = {newNumber}
                    onChange = {handleNumberChange} /> </p>
                <button type = "submit" > Submit </button>
            </form>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));