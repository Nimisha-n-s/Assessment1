import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Addlink from './components/Addlink';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/add' element={<Addlink/>}/>
 </Routes>
    </div>
  );
}

export default App;
