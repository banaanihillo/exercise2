import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
    const {courseDetails} = props
    
    return (
        <div>
            <p> {courseDetails} </p>
        </div>
    )    
}

const Header = (props) => {
    const {courseName} = props

    return (
        <div>
            <h1> Description of the course: {courseName} </h1>
        </div>
    )
}

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

const Course = (props) => {
    const {courseName, parts} = props

    return (
        <div>
            <Header courseName = {courseName} />
            <Content parts = {parts} />
        </div>
    )
}

const App = () => {
    const course = {
        name: "Stack Half-Full",
        id: 1,
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3
            },
            {
                name: "Nonexistent part of the course",
                exercises: 0,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Course courseName = {course.name} parts = {course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));