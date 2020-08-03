import React from "react";
import Notification from "../Notification";
import PositiveStats from "../PositiveStats";
import "./Statistics.css";

export default function Statistics({ statistic, totalVotes, positiveCount }) {
  const isVoted = Object.values(statistic).reduce((a, b) => a + b) > 0;

  return isVoted ? (
    <div className="Statistics-section">
      <p>Good: {statistic.good}</p>
      <p>Neutral: {statistic.neutral}</p>
      <p>Bad: {statistic.bad}</p>
      <p>Total feedbacks: {totalVotes}</p>
      {positiveCount && <PositiveStats posCount={positiveCount} />}
    </div>
  ) : (
    <Notification message="No feedback given"></Notification>
  );
}
