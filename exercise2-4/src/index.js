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
    const {name} = props

    return (
        <div>
            <h2> {name} </h2>
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
            <p> This course contains {numberOfExercises.reduce(calculateSum)} exercises. </p>
        </div>
    )
}

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

const App = () => {
    const courses = [
        {
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
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1
                },
                {
                    name: "Another imaginary part",
                    exercises: 0,
                    id: 2
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 3
                }
            ]
        },
        {
            name: "Hypothetical course",
            id: 3,
            parts: [
                {
                    name: "To be announced",
                    exercises: 0,
                    id: 1
                }
            ]
        }
    ]

    return (
        <div>
            <h1> Full Stack Open </h1>
            {courses.map(course =>
                <Course key = {course.id} name = {course.name} parts = {course.parts} />
            )}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));