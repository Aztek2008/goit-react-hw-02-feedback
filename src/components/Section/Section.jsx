import React from "react";
import styles from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <div className={styles.FeedbackUI}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
