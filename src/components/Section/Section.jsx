import React from "react";
import "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <div className={styles.FeedbackUI - section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
