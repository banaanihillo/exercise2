import React from 'react';

const Persons = (props) => {
    const {persons, searchTerms} = props;

    return (
        <ul>
            {persons.filter(person =>
                person.name.toLowerCase().includes(searchTerms.toLowerCase()) === true
            ).map(person =>
                <li key = {person.id}> {person.name}: {person.number} </li>
            )}
        </ul>
    )
}

export default Persons;