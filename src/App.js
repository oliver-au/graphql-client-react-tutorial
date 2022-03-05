import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Pets from './components/pets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/pets' element={<Pets />}/>
      </Routes>
    </div>
  );
}

export default App;
