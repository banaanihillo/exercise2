import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
    const {courseDetails} = props

    return (
        <div>
            {courseDetails}
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

const Total = (props) => {
    const {numberOfExercises} = props

    const calculateSum = (summand, subTotal) => summand + subTotal;

    return (
        <div>
            <p> The course contains {numberOfExercises.reduce(calculateSum)} exercises. </p>
        </div>
    )
}

const Course = (props) => {
    const {courseName, parts} = props

    return (
        <div>
            <Header courseName = {courseName} />
            <Content parts = {parts} />
            <Total numberOfExercises = {parts.map(part => part.exercises)}/>
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
            },
            {
                name: "Redux",
                exercises: 11,
                id: 5
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