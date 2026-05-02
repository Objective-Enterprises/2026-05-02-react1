import "./App.css"
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useState } from "react";

function Content({ currentPage }) {
  if (currentPage === 'register') {
    return <Register />;
  }
  return <Login />;
}

export default Content;
