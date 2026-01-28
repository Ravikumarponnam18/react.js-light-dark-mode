import { useState } from "react";
import "./mode.css";

const Mode = () => {
  const [isLight, setIsLight] = useState(true);

  const handleToggle = () => {
    setIsLight(!isLight);
  };

  return (
    <div className={isLight ? "page light" : "page dark"}>
      <div className="card">
        <span className="mode-indicator">
          {isLight ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </span>

        <h1 className="title">Theme Switcher</h1>
        <p className="subtitle">
          Click the button below to experience smooth UI transitions
        </p>

        <button className="toggle-btn" onClick={handleToggle}>
          {isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Mode;
