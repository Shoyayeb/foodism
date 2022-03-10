import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddFood from './Pages/AddFood/AddFood';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Foods from './Pages/HomePage/Foods/Foods';
import HomePage from './Pages/HomePage/HomePage/HomePage';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import OrderFood from './Pages/OrderFood/OrderFood';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import UserOrders from './Pages/UserOrders/UserOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add_food" element={<AddFood />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/myorders" element={<UserOrders />} />
          <Route path="/order/:foodId" element={<OrderFood />} />
          <Route path="dashboard/*" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
