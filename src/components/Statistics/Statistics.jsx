import React from "react";
import "./Statistics.css";

export default function Statistics({ statistic, totalVotes, positiveCount }) {
  return (
    <div className="Statistics-section">
      <p>Good: {statistic.good}</p>
      <p>Neutral: {statistic.neutral}</p>
      <p>Bad: {statistic.bad}</p>
      <p>Total feedbacks: {totalVotes}</p>
      <p>Positive: {positiveCount}</p>
    </div>
  );
}
