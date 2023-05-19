import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Header from './sharedComponent/Header';
import "../src/assets/styles/main.scss"

function App() {
  return (
    <div className="total_body">
      <Header />
      <Routes>
        <Route path='/' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
