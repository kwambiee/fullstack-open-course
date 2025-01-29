const Total = ({ sum }) => { 
    let exercise_total = sum.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <p>Number of exercises: {exercise_total}</p>
    )
}

export default Total