import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course.js';

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