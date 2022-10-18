import React, { Component } from 'react';

class Heading extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    const { text, className } = this.props;
    return <h2 className={className}>{text}</h2>;
  }
}

export { Heading };
