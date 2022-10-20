import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/ui';
import { ucFirst } from 'utils';

class StatisticsList extends Component {
  static defaultProps = {
    dataFeedback: {},
  };

  static propTypes = {
    dataFeedback: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
      total: PropTypes.number,
      'Positive feedback': PropTypes.string,
    }),
  };

  render() {
    const { statistics } = this.props;
    return (
      <>
        {statistics.map(([name, quantity]) => {
          const newName = ucFirst(name);
          return (
            <Text key={newName}>
              {newName}: <span>{quantity}</span>
            </Text>
          );
        })}
      </>
    );
  }
}

export { StatisticsList };
