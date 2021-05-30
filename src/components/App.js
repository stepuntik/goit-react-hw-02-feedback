import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatistics = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: this.state[e.target.name] + 1,
    });
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;

    return total ? (good / total) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback(good, neutral, bad);

    return (
      <form>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.updateStatistics}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </form>
    );
  }
}
