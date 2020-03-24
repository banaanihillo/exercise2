import React from 'react';

const AddEntry = (props) => {
    const {addPerson, newName, newNumber, handleName, handleNumber} = props;
    
    return (
        <form onSubmit = {addPerson} >
            <p>
                Name: <input
                    value = {newName}
                    onChange = {handleName} />
            </p>
            <p>
                Number: <input
                    value = {newNumber}
                    onChange = {handleNumber} />
            </p>
            <button type = "submit" > Submit </button>
        </form>
    )
}

export default AddEntry;