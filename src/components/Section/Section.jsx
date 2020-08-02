import React from "react";
import "./Section.css";

export default function Section({ title, children }) {
  return (
    <div className="FeedbackUI-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
