import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/hoc';
import { StatisticsList, Notification } from 'components/common';

class Statistics extends Component {
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
    const { dataFeedback } = this.props;
    const { total } = dataFeedback;
    const statistics = Object.entries(dataFeedback);
    return (
      <Section title={'Statistics'}>
        {total ? <StatisticsList statistics={statistics} /> : <Notification />}
      </Section>
    );
  }
}

export { Statistics };
