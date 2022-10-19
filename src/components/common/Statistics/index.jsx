import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/ui';
import { Section } from 'components/hoc';

class Statistics extends Component {

  static defaultProps = {
    dataFeedback: {},
  };
  
  static propTypes = {
    dataFeedback: PropTypes.shape({
      good: PropTypes.string,
      neutral: PropTypes.string,
      bad: PropTypes.string,
      total: PropTypes.string,
      'Positive feedback': PropTypes.number,
    }),
  };

  render() {
    const { dataFeedback } = this.props;
    const statistics = Object.entries(dataFeedback);
    return (
      <Section title={'Statistics'}>
        {statistics.map(([name, quantity]) => {
          return (
            <Text key={name}>
              {name}: <span>{quantity}</span>
            </Text>
          );
        })}
      </Section>
    );
  }
}

export { Statistics };
