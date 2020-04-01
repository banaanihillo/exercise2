import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Persons from './components/Persons.js';
import AddEntry from './components/AddEntry.js';
import Filter from './components/Filter.js';
import handlePersons from "./services/persons.js";
require("./styles.css");

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [searchTerms, setSearchTerms] = useState("")
    const [message, setMessage] = useState("")

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
            name: newName,
            number: newNumber,
            id: Math.floor(Math.random() * 10000)
        }
        var duplicate = (persons.some(person => person.name === newName)) ? true : false

        if (duplicate) {
            if (window.confirm(
                `${newName} already exists.
                Do you want to replace their number with ${newNumber}?`)
            ) {
                const personToReplace = persons.find(person =>
                    person.name === newName)
                
                handlePersons
                    .updateNumber(personObject, personToReplace)
                    .then(response => {
                        setPersons(persons.map(person =>
                            person.id !== personToReplace.id ? person : response.data)
                        )
                    })
                setMessage(
                    `Successfully updated ${newName} with ${newNumber}.`
                )
                setTimeout(() => {
                    setMessage(null)
                }, 6000)
                setNewName("")
                setNewNumber("")
            }
        } else {
            handlePersons
                .addPerson(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                })
            setMessage(
                `Successfully added a new entry: ${newName}, ${newNumber}.`
            )
            setTimeout(() => {
                setMessage(null)
            }, 6000)
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
            setMessage(
                `Successfully removed ${id} from the phonebook.`
            )
            setTimeout(() => {
                setMessage(null)
            }, 6000)
        }
    }

    const Message = (props) => {
        const {message} = props
        if (message === null) {
            return null
        }

        return (
            <div className = "success">
                {message}
            </div>
        )
    }

    return (
        <div>
            <h1> Names and Numbers </h1>
            <Filter searchTerms = {searchTerms} handleSearching = {handleSearching} />
            <Persons
                persons = {persons}
                searchTerms = {searchTerms}
                removePerson = {removePerson} />
            <Message message = {message} />
            <h2> Add a new entry here </h2>
            <AddEntry addPerson = {addPerson} newName = {newName} newNumber = {newNumber}
                handleName = {handleNameChange} handleNumber = {handleNumberChange} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));