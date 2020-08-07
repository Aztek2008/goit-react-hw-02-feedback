import React from "react";
import FeedbackButton from "../FeedbackButton";
import styles from "./FeedbackControls.module.css";

export default function FeedbackControls({ onAddVote }) {
  return (
    <div className={styles.FeedbackControls}>
      <FeedbackButton name="good" vote={onAddVote} />
      <FeedbackButton name="neutral" vote={onAddVote} />
      <FeedbackButton name="bad" vote={onAddVote} />
    </div>
  );
}
