import React from 'react';

const Persons = (props) => {
    const {persons, searchTerms, removePerson} = props;

    return (
        <ul>
            {persons.filter(person =>
                person.name.toLowerCase().includes(searchTerms.toLowerCase()) === true
            ).map(person =>
                <li key = {person.id}>
                    {person.name}: {person.number}
                    <button onClick = {() => removePerson(person.id)}> Remove entry </button>
                </li>
            )}
        </ul>
    )
}

export default Persons;