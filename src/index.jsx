import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Pastikan path ini benar
import "./index.css"; // Jika ada styling global

const root = ReactDOM.createRoot(document.getElementById("root")); // Pastikan ada elemen <div id="root"> di index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

