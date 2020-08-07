import React from "react";
import styles from "./Statistics/Statistics.module.css";

export default function PositiveStats({ posCount }) {
  return <p className={styles.positiveData}>Positive: {posCount}</p>;
}
