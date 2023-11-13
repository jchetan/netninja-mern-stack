import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddNewWorkout from './pages/AddNewWorkout';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/addnewworkout'
            element={<AddNewWorkout />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
