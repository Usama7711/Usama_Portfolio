import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
