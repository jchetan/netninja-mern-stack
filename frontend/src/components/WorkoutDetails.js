import { useState } from "react";

const WorkoutDetails = ({workout}) => {
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        const response = await fetch(
            '/api/workouts/' + workout._id,
            {
                method: 'DELETE'
            }
        )
        const json = await response.json();
        if (response.ok) {
            setMessage('Workout Deleted');
        } else {
            setMessage('Some problem in deleting workout');
        }
    }
    return (
        <div className="row justify-content-center" >
            <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Workout: {workout.title}</h5>
                    <p className="card-text">Reps: {workout.reps}</p>
                    <p className="card-text">Load: {workout.load}</p>
                    <button onClick={handleDelete} className="btn btn-primary">Delete Workout</button>
                    {message && 
                        <div>
                            {message}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkoutDetails