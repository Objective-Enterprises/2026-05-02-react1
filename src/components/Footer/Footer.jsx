import React from "react";
import "./Footer.css";

// Footer component
export default function Footer () {
  const date = new Date().getFullYear()
  return (
    <footer>
      Copyright {date}
    </footer>
  )
}