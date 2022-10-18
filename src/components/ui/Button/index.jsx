import React, { Component } from 'react';

class Button extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    const { text, handleClick, className } = this.props;
    return(
      <button className={className} onClick={handleClick}>{text}</button>
    )
  }
}

export { Button };
