import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import HomePage from './Pages/HomePage/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="dashboard/*" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
