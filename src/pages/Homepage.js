import ExerciseTable from '../components/ExerciseTable';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';


function Homepage({setExerciseToEdit}){

    const [exercises, setExercise] = useState([]);

    const navigate = useNavigate()

    const loadExercises = async () => {
        const response =  await fetch("/exercises");
        const data = await response.json();
        setExercise(data);
    }

    useEffect( () => {
        loadExercises();
        }, []);

    const deleteExercise = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, {method: 'delete'});
        const status = response.status
        if (status === 204) {
            const data_response =  await fetch("/exercises");
        const data = await data_response.json();
        setExercise(data);
        }else {
            console.log(`Failed to delete database item with id: ${_id}.`)
        }
    }

    const editExercise = exercise => {
        setExerciseToEdit(exercise);
        navigate('/edit');
    }


    return (
        <>
            <h2>Our current exercise list:</h2>
            <ExerciseTable exercises={exercises} deleteExercise = {deleteExercise} editExercise = {editExercise}></ExerciseTable>
            <Link to="/create">Click to make exercise</Link>
        </>
    );
}

export default Homepage;