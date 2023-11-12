import { useState, useEffect } from 'react'

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(
    () => {
      const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts');
        const json = await response.json();
        if (response.ok) {
          setWorkouts(json);
          console.log(json);
        }
      }
      fetchWorkouts()
    },
    []
  );

  return (
    <div>
      {workouts && workouts.map((workout) => {
        return <p key={workout._id}>{workout.title}</p>
      })}
    </div>
  )
}

export default Home