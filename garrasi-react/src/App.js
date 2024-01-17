import './App.css';
import Subject from './components/Subject';
import HomePage from './pages/HomePage';

import { Routes , Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Subject/>}></Route>
    </Routes>
  );
}

export default App;
