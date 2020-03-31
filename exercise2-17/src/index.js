import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Persons from './components/Persons.js';
import AddEntry from './components/AddEntry.js';
import Filter from './components/Filter.js';
import handlePersons from "./services/persons.js";
require("./styles.css");

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [searchTerms, setSearchTerms] = useState("")

    useEffect(() => {
        handlePersons
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, []
    )

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: (persons.some(person => person.name === newName)) ? null : newName,
            number: newNumber,
            id: Math.random()
        }

        if (personObject.name === null) {
            window.alert(`${newName} already exists!`)
        } else {
            handlePersons
                .addPerson(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                })
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

    const removePerson = (id) => {
        if (window.confirm("Do you really want to remove this entry?")) {
            handlePersons
                .removePerson(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    return (
        <div>
            <h1> Names and Numbers </h1>
            <Filter searchTerms = {searchTerms} handleSearching = {handleSearching} />
            <Persons
                persons = {persons}
                searchTerms = {searchTerms}
                removePerson = {removePerson} />
            <h2> Add a new entry here </h2>
            <AddEntry addPerson = {addPerson} newName = {newName} newNumber = {newNumber}
                handleName = {handleNameChange} handleNumber = {handleNumberChange} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));