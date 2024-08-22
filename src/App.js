import logo from './logo.svg';
import './App.css';
import CenteredDiv from './component/CenteredDiv.js';
import Login from './component/Loginpage.js';
import Register from './component/Registerpage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie" element={<CenteredDiv />} />
      </Routes>
    </Router>
  );
}




export default App;
