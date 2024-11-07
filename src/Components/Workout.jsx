import React from 'react';
import './Workout.css'; // Add some styles if you'd like

function Workout() {
  const workouts = [
    {
      name: 'Push-Ups',
      description: 'A basic upper body exercise that targets chest, shoulders, and triceps.',
      image: 'https://www.shutterstock.com/image-vector/man-doing-push-up-flat-260nw-1841645233.jpg', 
    },
    {
      name: 'Squats',
      description: 'A lower body exercise that strengthens the legs and glutes.',
      image: 'https://www.shutterstock.com/image-vector/exercise-guide-by-man-doing-260nw-2081735731.jpg', 
    },
    {
      name: 'Plank',
      description: 'A core strengthening exercise that builds stability and endurance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBuE5oj3pLchHIKTl9lDx4eelEqqruz8G3Y1hcszDztyKltCBE66Lz0lRQn-7LnVMAM1tKg&s', 
    },
    {
      name: ' Lunges',
      description: ' Step forward with one leg and lower your hips until then push back up to standing.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPm7FbhMtjHEeaww4uMGOJsOlnlR9FUWN_cA&s', 
    },
  ];

  return (
    <div style={{backgroundColor:'#c0d8f4',height:'85vh'}}>
      <center><h1>Workout Information</h1></center>
      <div className="workout-list">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-item">
            <h2 style={{color:'black'}}>{workout.name}</h2>
            <img src={workout.image} alt={workout.name} className="workout-image" />
            <p>{workout.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workout;
