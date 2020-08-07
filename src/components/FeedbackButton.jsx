import React from "react";
import "./FeedbackControls/FeedbackControls.module.css";

export default function FeedbackButton({ name, vote }) {
  return (
    <button
      name={name}
      id={name}
      type="button"
      onClick={(e) => {
        vote(e.target.name.toLowerCase());
      }}
    >
      {name}
    </button>
  );
}
