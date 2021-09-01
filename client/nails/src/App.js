
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Topbar />
    </Router>
  );
}

export default App;
