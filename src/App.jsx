import React, { Component } from 'react';
import { FeedbackOptions, Statistics } from 'components/common';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    'Positive feedback': '0%',
  };

  countPositiveFeedbackPercentage() {
    const newState = { ...this.state };
    const { good, total } = newState;
    const positiveFeedback = Math.round((good * 100) / total);
    this.setState({
      ...newState,
      'Positive feedback': `${positiveFeedback}%`,
    });
  }

  countTotalFeedback() {
    const START_SLICE = 0;
    const END_SLICE = 3;
    const newState = { ...this.state };
    const total = Object.values(newState)
      .slice(START_SLICE, END_SLICE)
      .reduce((acc, num) => acc + num, 0);
    this.setState(
      {
        ...newState,
        total,
      },
      this.countPositiveFeedbackPercentage
    );
  }

  handleIncrement(nameFeedback) {
    const newState = { ...this.state };
    newState[nameFeedback]++;
    this.setState(
      {
        ...newState,
      },
      this.countTotalFeedback
    );
  }

  render() {
    const dataFeedback = this.state;
    return (
      <div>
        <FeedbackOptions onLeaveFeedback={this.handleIncrement.bind(this)} />
        <Statistics dataFeedback={dataFeedback} />
      </div>
    );
  }
}

export { App };
