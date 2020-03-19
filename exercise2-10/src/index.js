import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Persons from './components/Persons.js';
import AddEntry from './components/AddEntry.js';
import Filter from './components/Filter.js';

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
            <Filter searchTerms = {searchTerms} handleSearching = {handleSearching} />
            <Persons persons = {persons} searchTerms = {searchTerms} />
            <h2> Add a new entry here </h2>
            <AddEntry addPerson = {addPerson} newName = {newName} newNumber = {newNumber}
                handleName = {handleNameChange} handleNumber = {handleNumberChange} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));