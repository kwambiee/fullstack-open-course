const Total = ({ parts }) => { 
    let exercise_total = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <h4 className="font-bold">Total of {exercise_total} exercises</h4>
    )
}

export default Total