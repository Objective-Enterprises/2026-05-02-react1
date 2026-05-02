import "./App.css"
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useState } from "react";
import Content from "./Content";

function App() {
  const [currentPage, setCurrentPage] = useState('register');

  return (
    <div className="app-layout">
      <Content currentPage={currentPage} />
    </div>
  );
}

export default App;
