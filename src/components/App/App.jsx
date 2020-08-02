import React, { Component } from "react";
import FeedbackControls from "../FeedbackControls/FeedbackControls";
import Statistics from "../Statistics/Statistics";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addVote = (e) => {
    this.setState({
      [e]: this.state[e] + 1,
    });
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () => {
    return (
      this.state.good > 0 &&
      Math.floor((this.state.good / this.countTotalFeedback()) * 100) + "%"
    );
  };

  render() {
    return (
      <div className="FeedbackUI-section">
        <h2>Please leave feedback</h2>
        <FeedbackControls onAddVote={this.addVote} />
        <h2>Statistics</h2>
        <Statistics
          statistic={this.state}
          totalVotes={this.countTotalFeedback()}
          positiveCount={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;

// ===== IDEA FOR HW 2 ==== //
// countTotalVotes = () => {
//  return Object.values(state).reduce().....
// }
//
//countPercentage = (totalVotes, posVotes) => {
//  return ?? totalVotes / posVotes ??
// }
//

// render() {
// const total = this.countTotalVotes()
// <h1> { total } </h1>;
// const posR = this.countPercentage(total, this.state.good)
