import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar/Navbar';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="about" element = {<About/>} />
    <Route path="OrderSummary" element= { <OrderSummary/>} />
   </Routes>
    </div>
  );
}

export default App;
