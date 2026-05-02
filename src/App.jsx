import "./App.css"
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [currentPage, setCurrentPage] = useState('register');

  const handleResetPassword = (data) => {
    console.log("Resetting password for:", data.email);
  };

  return (
    <div className="app-layout">
      <Header onNavigate={setCurrentPage} />

      {currentPage === 'register' && <Register />}
      {currentPage === 'login' && <Login />}
      {currentPage === 'reset-password' && <ResetPassword onResetPassword={handleResetPassword} />}

      <Footer />
    </div>
  );
}

export default App;
