import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'


export const EditPage = ({exerciseToEdit}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const rewriteExercise = async () => {
        const rewrittenExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(rewrittenExercise),
            headers: {'Content-Type': 'application/json'},        
        });
        if (response.status === 200) {
            alert("Exercise successfully edited.")
        } else {
            alert('Exercise edit unsuccessful.');
        }
        navigate('/')
    };

    return (
        <div>
            <h2>Edit an exercise here.</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </thead>
                <tbody>
            <td>
                <input
                type = "text"
                value={name}
                onChange={e => setName(e.target.value)} />
                </td>
            <td>
                <input
                type = "number"
                value={reps}
                onChange={e => setReps(e.target.valueAsNumber)} />
                </td>
            <td>
                <input
                type = "number"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />
                </td>
                <td>
            <select
            value = {unit}
            onChange={e => setUnit(e.target.value)}
            >
                <option value="lbs">lbs</option> 
                <option value="kgs">kgs</option> 
            </select>
            </td>
            <td>
            <input
                type = "text"
                value={date}
                onChange={e => setDate(e.target.value)} />
                </td>
            </tbody>
            </table>
            <button id="edit_button" onClick={() => rewriteExercise()}>Submit changes</button>
        </div>
    );
}

export default EditPage;