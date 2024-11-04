// Header.jsx
import React from "react";
import "./Header.css"; // External CSS for styling

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h6 className="logo">
          Promte - Your Digital Advertising Partner.
          {/* Booking Platform{" "} */}
          {/* <p className="subtitle">
            Manage bookings, upload media, and enjoy a seamless experience with
            modern tools.
          </p> */}
        </h6>

        <nav className="nav-links">
          {/* <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </header>
  );
}
