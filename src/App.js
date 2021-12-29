import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Error404 from './Pages/Error404/Error404';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='*' element={ <Error404 />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
