import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/ui';
import { Section } from 'components/hoc';
import { ucFirst } from 'utils';
import { options } from './index.data';

class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <Section title={'Please leave feedback'}>
        <div>
          {options.map((name, index) => {
            const newName = ucFirst(name);
            return (
              <Button
                key={index}
                handleClick={() => onLeaveFeedback(name)}
                text={newName}
              />
            );
          })}
        </div>
      </Section>
    );
  }
}

export { FeedbackOptions };
