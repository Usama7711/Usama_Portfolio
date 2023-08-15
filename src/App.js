import logo from './logo.svg';
import '../src/assets/styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import Header from './sharedComponent/Header';

function App() {
  return (
    <>
      
      <div className="">
        <Header />
        <Routes>
          <Route path='/' element={<DashBoard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
