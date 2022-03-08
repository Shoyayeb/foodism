import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import HomePage from './Pages/HomePage/HomePage/HomePage';
import LoginRegister from './Pages/LoginRegister/LoginRegister/LoginRegister';
import Register from './Pages/LoginRegister/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="dashboard/*" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
