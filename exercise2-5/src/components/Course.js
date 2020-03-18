import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

const Course = (props) => {
    const {name, parts} = props

    return (
        <div>
            <Header name = {name} />
            <Content parts = {parts} />
            <Total numberOfExercises = {parts.map(part => part.exercises)} />
        </div>
    )
}

export default Course;