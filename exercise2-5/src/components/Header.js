import React from 'react';

const Header = (props) => {
    const {name} = props

    return (
        <div>
            <h2> {name} </h2>
        </div>
    )
}

export default Header;