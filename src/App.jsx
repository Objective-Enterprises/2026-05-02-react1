import "./App.css"
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('register');
  return (
    <div className="app-layout">
      {currentPage === 'register' ? <Register /> : <Login />}
    </div>
  );
}

export default App;
