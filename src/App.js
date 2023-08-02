import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './sections/Home';
import CryptoData from './sections/CryptoData';
import Appbar from './components/Appbar';

function App() {
  return (
    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CryptoData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
