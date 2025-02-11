const Total = ({ parts }) => { 
    let exercise_total = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <p className="font-bold">Total of {exercise_total} exercises</p>
    )
}

export default Total