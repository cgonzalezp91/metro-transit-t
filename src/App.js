import 'bulma/css/bulma.min.css';
import './App.css';
import Navbar from './components/headers/Navbar';
import NextTrip from './containers/NextTrip';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NextTrip/>
    </div>
  );
}

export default App;
