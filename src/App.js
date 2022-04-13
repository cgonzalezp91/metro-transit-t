import 'bulma/css/bulma.min.css';
import './App.css';
import Navbar from './components/headers/Navbar';
import NextTrip from './pages/NextTrip';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<NextTrip/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path="*" element={<main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
