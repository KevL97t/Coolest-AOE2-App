import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='*' />
      </Routes>
    </Router>
  );
}

export default App;
