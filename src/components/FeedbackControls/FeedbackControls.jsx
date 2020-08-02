import React from "react";
import FeedbackButton from "../FeedbackButton";
import "./FeedbackControls.css";

export default function FeedbackControls({ onAddVote }) {
  return (
    <div className="FeedbackUI-controls">
      <FeedbackButton name="good" vote={onAddVote} />
      <FeedbackButton name="neutral" vote={onAddVote} />
      <FeedbackButton name="bad" vote={onAddVote} />
    </div>
  );
}
