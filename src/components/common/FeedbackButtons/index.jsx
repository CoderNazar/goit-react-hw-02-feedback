import React, { Component } from 'react';
import { Button, Heading } from 'components/ui';

class FeedbackButtons extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <Heading text={'Please leave feedback'} />
        <div>
          <Button handleClick={() => handleClick('good')} text={'Good'} />
          <Button handleClick={() => handleClick('neutral')} text={'Neutral'} />
          <Button handleClick={() => handleClick('bad')} text={'Bad'} />
        </div>
      </div>
    );
  }
}

export { FeedbackButtons };
