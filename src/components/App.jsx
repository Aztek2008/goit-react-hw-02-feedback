import React, { Component } from "react";
import FeedbackControls from "./FeedbackControls/FeedbackControls";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";

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
      <>
        <Section title="Please leave feedback">
          <FeedbackControls onAddVote={this.addVote} />
        </Section>
        <Section title="Statistics">
          <Statistics
            statistic={this.state}
            totalVotes={this.countTotalFeedback()}
            positiveCount={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
