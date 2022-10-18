import React, { Component } from 'react';
import { Text } from 'components/ui';

class Statistics extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    const { dataFeedback } = this.props;
    const statistics = Object.entries(dataFeedback);
    return (
      <>
        {statistics.map(([name, quantity]) => {
          return (
            <Text key={name}>
              {name}: <span>{quantity}</span>
            </Text>
          );
        })}
      </>
    );
  }
}

export { Statistics };
