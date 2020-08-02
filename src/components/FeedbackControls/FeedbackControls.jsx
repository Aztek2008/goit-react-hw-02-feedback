import React from "react";
import "./FeedbackControls.css";

export default function FeedbackControls({ onAddVote }) {
  return (
    <div className="FeedbackUI-controls">
      <button
        name="Good"
        type="button"
        onClick={(e) => {
          onAddVote(e.target.name.toLowerCase());
        }}
      >
        Good
      </button>

      <button
        name="Neutral"
        type="button"
        onClick={(e) => {
          onAddVote(e.target.name.toLowerCase());
        }}
      >
        Neutral
      </button>

      <button
        name="Bad"
        type="button"
        onClick={(e) => {
          onAddVote(e.target.name.toLowerCase());
        }}
      >
        Bad
      </button>
    </div>
  );
}
