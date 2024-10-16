import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-main-container">
      <div className="header-leftside-container">
        <h1>UpWork</h1>
        <h3>Why UpWork ▶</h3>
      </div>
      <div className="why-upwork">
        <h4>How to hire</h4>
        <h4>How to find work</h4>
      </div>

      <div className="header-rightside-container">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
