import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import {useState} from 'react'


function App() {

    const [exerciseToEdit, setExerciseToEdit] = useState();

    return (
        <div className="App-header">
            <Router>
            <header>
            <h1>Exercise Tracker</h1>
            <p>Full Stack MERN App Demo</p>
            </header>
              <Navigation />
              <Routes>
                <Route path="/" element={<Homepage setExerciseToEdit = {setExerciseToEdit} />}></Route>
                <Route path="/edit" element={<EditPage exerciseToEdit = {exerciseToEdit} />}></Route>
                <Route path="/create" element={<CreatePage />}></Route>
              </Routes>
              <footer>
                <p>© 2022 Aidan MacKenzie</p>
              </footer>
            </Router>
        </div>
      );
}

export default App;