import React from 'react';

const Total = (props) => {
    const {numberOfExercises} = props

    const calculateSum = (summand, subTotal) => summand + subTotal;

    return (
        <div>
            <p> This course contains {numberOfExercises.reduce(calculateSum)} exercises. </p>
        </div>
    )
}

export default Total;