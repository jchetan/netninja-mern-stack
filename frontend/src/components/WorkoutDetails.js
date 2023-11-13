import React from 'react'

const WorkoutDetails = ({workout}) => {
    return (
        <div className="row justify-content-center" >
            <div className="card" style={{ width: "40rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Workout: {workout.title}</h5>
                    <p className="card-text">Reps: {workout.reps}</p>
                    <p className="card-text">Load: {workout.load}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkoutDetails