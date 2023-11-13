import { useState } from 'react'

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = {title, load, reps};
        const response = await fetch(
            'http://localhost:4000/api/workouts',
            {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const json = await response.json();
        if (!response.ok) {
            setMessage(json.error);
        } else {
            setTitle('');
            setLoad('');
            setReps('');
            setMessage('Workout Added');
        }
    }

    return (
        <div className="row justify-content-center my-2">
            <div className="col-4 border">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="workoutTitle" className="form-label">Workout Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="workoutTitle"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="workoutReps" className="form-label">Workout Reps</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="workoutReps" 
                            onChange={(e) => setReps(e.target.value)}
                            value={reps}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="workoutLoad" className="form-label">Workout Load</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="workoutLoad" 
                            onChange={(e) => setLoad(e.target.value)}
                            value={load}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Add Workout</button>
                    {message && 
                        <div>
                            {message}
                        </div>
                    }
                </form>
            </div>
        </div>

    )
}

export default WorkoutForm;