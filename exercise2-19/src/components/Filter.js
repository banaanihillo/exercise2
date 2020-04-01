import React from 'react';

const Filter = (props) => {
    const {searchTerms, handleSearching} = props;

    return (
        <p>
            Search for a name: <input
                value = {searchTerms}
                onChange = {handleSearching} />
        </p>
    )
}

export default Filter;