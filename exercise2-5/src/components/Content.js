import React from 'react';
import Part from './Part.js';


const Content = (props) => {
    const {parts} = props

    return (
        <div>
            <Part courseDetails = {parts.map(part =>
                <li key = {part.id}>
                    {part.name} contains {part.exercises} exercises.
                </li>
            )} />
        </div>
    )
}

export default Content;