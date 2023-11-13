import { useState, useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';


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
    <div className='container'>
      
      {workouts && workouts.map((workout) => {
        return (
          <WorkoutDetails key={workout._id} workout={workout} />
        )
      })}
    </div>
  )
}

export default Home