import React, { Component } from 'react';
import { FeedbackButtons, Statistics } from 'components/common';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    'Positive feedback': '0%',
  };

  countTotalFeedback() {
    const START_SLICE = 0;
    const END_SLICE = 3;
    const newState = { ...this.state };
    const total = Object.values(newState)
      .slice(START_SLICE, END_SLICE)
      .reduce((acc, num) => acc + num, 0);
    this.setState({
      ...newState,
      total,
    });
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

  static defaultProps = {};
  static propTypes = {};

  render() {
    const dataFeedback = this.state;
    return (
      <div>
        <FeedbackButtons handleClick={this.handleIncrement.bind(this)} />
        <Statistics dataFeedback={dataFeedback} />
      </div>
    );
  }
}

export { App };
