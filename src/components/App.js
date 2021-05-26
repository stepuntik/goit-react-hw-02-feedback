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

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    if (good + neutral + bad === 0) return 0;

    return (good / (good + neutral + bad)) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <form>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.updateStatistics}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            />
          )}
        </SectionTitle>
      </form>
    );
  }
}
