import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

export const CreatePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {'Content-Type': 'application/json'},        
        });
        if (response.status === 201) {
            alert("Exercise successfully created.")
        } else {
            alert('Exercise creation unsuccessful.');
        }
        navigate('/')
    };

    return (
        <div>
            <h2>Create a new exercise here.</h2>
            <input
                type = "text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type = "number"
                placeholder="Enter reps here"
                value={reps}
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                type = "number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />
            <select
            value = {unit}
            onChange={e => setUnit(e.target.value)}
            >
                <option value="lbs">"lbs"</option> 
                <option value="kgs">"kgs"</option> 
            </select>
            <input
                type = "text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button onClick={() => addExercise()}>Submit exercise</button>
        </div>
    );
}

export default CreatePage;