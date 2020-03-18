import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [persons, setPersons] = useState([
        {name: "Heini Sirkka", id: Math.random()},
        {name: "Random Number", id: Math.random()}
    ]);
    const [newName, setNewName] = useState("")

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: (persons.some(person => person.name === newName)) ? null : newName,
            id: persons.length + 1
        }

        if (personObject.name === null) {
            window.alert(`${newName} already exists!`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName("")
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h1> Name catalog </h1>
            <ul>
                {persons.map(person =>
                    <li key = {person.id} > {person.name} </li>
                )}
            </ul>
            <form onSubmit = {addPerson} >
                <input
                    value = {newName}
                    onChange = {handleNameChange} />
                <button type = "submit" > Add new name </button>
            </form>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));